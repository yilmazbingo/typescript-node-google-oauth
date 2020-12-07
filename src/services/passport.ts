import GoogleStrategy from "passport-google-oauth20";
import passport from "passport";
import { User, UserDoc } from "../database/models/User";

// passport sets up the cookie and stuffs the user's database id not the googleId.
passport.serializeUser(
  (user: UserDoc, done: (err: any, user: UserDoc) => void) => {
    done(null, user.id);
  }
);

passport.deserializeUser(
  async (id: string, done: (err: any, user: UserDoc) => void) => {
    const user = await User.findById(id);
    if (user) {
      done(null, user);
    }
  }
);

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "http://localhost:4500/auth/google/callback",
      proxy: true,
    },
    // this is called when user is redirected back to our app
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        done(undefined, existingUser);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(undefined, user);
    }
  )
);
