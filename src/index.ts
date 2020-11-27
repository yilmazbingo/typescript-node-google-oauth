import "./database";
import "./services/passport";
import "./app";

if (
  !process.env.GOOGLE_CLIENT_ID ||
  !process.env.GOOGLE_CLIENT_SECRET ||
  !process.env.DATABASE_URL ||
  !process.env.COOKIE_KEY
) {
  console.log("check your env variables");
  process.exit(1);
}
