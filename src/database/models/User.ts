import mongoose, { Model, Types, Document } from "mongoose";

// import { InternalServerError } from "../../errors";
const Schema = mongoose.Schema;

export interface UserDoc extends Document {
  googleId: string;
}

export interface UserModel extends mongoose.Model<UserDoc> {}

const userSchema = new Schema({
  googleId: { type: String, required: true },
});

export const User = mongoose.model<UserDoc, UserModel>("User", userSchema);
