import mongoose, { Document } from "mongoose";
import Joi from "joi";

export interface BookDoc extends Document {
  title: string;
  numberInStock: number;
  image: string;
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true,
    trim: true,
  },
  numberInStock: {
    type: Number,
    min: 0,
    max: 255,
    required: true,
  },

  image: String,
});

export function validateBook(book: BookDoc) {
  //Joi schema is what client sends us. so we need "genreId" in order to find the genre inside the database and then embed it inside the book document.
  const schema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    numberInStock: Joi.number().min(0).max(255).required(),
    image: Joi.string(),
  });
  return schema.validate(book);
}
export interface BookModel extends mongoose.Model<BookDoc> {}

export const Book = mongoose.model<BookDoc, BookModel>("Book", bookSchema);
