import mongoose from "mongoose";

mongoose
  .connect(process.env.DATABASE_URL!, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((e) => {
    throw new Error(e.message);
  })
  .then(() => {
    console.log("connected to db");
  });
