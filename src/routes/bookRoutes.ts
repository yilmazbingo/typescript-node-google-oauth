import { Application, Request, Response, NextFunction } from "express";
import { Book, validateBook } from "../database/models/Book";
import multer, { FileFilterCallback } from "multer";
import { randomBytes } from "crypto";
import {
  BadRequestError,
  DatabaseConnectionError,
  RequestValidationError,
} from "../errors";
import { asyncMiddleware } from "../middlewares/async-middleware";

const storage = multer.diskStorage({
  destination: function (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, randomBytes(4).toString("hex") + "-" + file.originalname);
  },
});
const imageFilter = function (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) {
  // accept only matched images
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    // return cb(new Error("jpg-jpeg-png-gif image files are allowed!"), false);
    return cb(null, false);
  }
  cb(null, true);
};
const upload = multer({
  fileFilter: imageFilter,
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
});

export const bookRoutes = (app: Application) => {
  app.get(
    "/api/books",
    asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
      const books = await Book.find().sort("");
      if (!books) {
        throw new DatabaseConnectionError();
      }
      res.send(books);
    })
  );

  app.get(
    "/api/books/:id",
    asyncMiddleware(async (req: Request, res: Response) => {
      const book = await Book.findById(req.params.id);
      if (book) throw new BadRequestError("Invalid Id");
      res.send(book);
    })
  );

  app.post(
    "/api/books",
    upload.single("bookImage"),
    asyncMiddleware(async (req: Request, res: Response) => {
      console.log(req.file); //req.file is awailable by upload.single() middleware func
      console.log("req.body", req.body);
      const { error } = validateBook(req.body);
      if (error) {
        throw new RequestValidationError(error.details[0].message);
      }
      let book = new Book({
        title: req.body.title,
        numberInStock: req.body.numberInStock,
        image: req.file,
      });
      book = await book.save();
      res.send(book);
    })
  );

  app.put(
    "/api/books/:id",
    asyncMiddleware(async (req: Request, res: Response) => {
      const { error } = validateBook(req.body);
      if (error) {
        throw new RequestValidationError(error.details[0].message);
      }

      let book = await Book.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          numberInStock: req.body.numberInStock,
          dailyRentalRate: req.body.dailyRentalRate,
        },
        { new: true }
      );
      if (!book) {
        throw new DatabaseConnectionError();
      }
      book = await book.save();
      res.send(book);
    })
  );

  app.delete(
    "/api/books/:id",
    asyncMiddleware(async (req: Request, res: Response) => {
      if (req.params.id) {
        const book = await Book.findOneAndDelete({ _id: req.params.id });
        if (!book) return res.status(400).send("not found");
        res.send(book);
      }
    })
  );
};
