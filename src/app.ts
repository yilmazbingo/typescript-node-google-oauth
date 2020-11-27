import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";
import bodyParser from "body-parser";
import cors from "cors";
import { authRoutes } from "./routes/authRoutes";
import { bookRoutes } from "./routes/bookRoutes";
import { errorHandler } from "./middlewares/error-handler";
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/images", express.static("images"));

// request comes in cookie session first and cookieSession extracts the cookie. then cookie will be passed to passport. passport will use the storedId to get the user from db. this user will be added to 'req.user'
// cookieSession adds user to req object
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // we can pass multiple keys
    keys: [process.env.COOKIE_KEY!],
  })
);

// passport will keep track of user session
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
bookRoutes(app);

app.get("/", (req, res) => {
  let adminContent = ` <div>
    <h1>This api set up to handle ssr</h1>
    <a href="/auth/google">the Authentication Route</a>. You could
    <a href="/api/books">Book Route</a>. You could

    also look at details about yourself at <a href="/current_user">the Current User route</a>
  </div>`;

  res.send(`
    <div>
      <div>
${adminContent}
      </div>
    </div>
  `);
});

app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`listenint at ${process.env.PORT} `);
});
