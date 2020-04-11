import { Author, IAuthor } from "./author.model";
import { APIResponse } from "../../app/models/response.interface";

export class AuthorController {
  getAuthors(): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Author.find({}, (err, authors) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when looking for the authors.",
          });
        }

        return resolve({
          status: 200,
          data: authors,
        });
      });
    });
  }

  getAuthorById(id: string): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Author.findById(id, (err, author) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when looking for the author.",
          });
        }

        return resolve({
          status: 200,
          data: author,
        });
      });
    });
  }

  createAuthor(author: IAuthor): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      const newAuthor = new Author(author);

      newAuthor.save((err, savedAuthor) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when creating the author.",
          });
        }

        return resolve({
          status: 200,
          data: savedAuthor,
        });
      });
    });
  }

  updateAuthor(author: IAuthor, id: string): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Author.findByIdAndUpdate(id, author, { new: true }, (err, updatedAuthor) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when updating the author.",
          });
        }

        return resolve({
          status: 200,
          data: updatedAuthor,
        });
      });
    });
  }

  removeAuthor(id: string): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Author.findByIdAndRemove(id, (err, removedAuthor) => {
        if (err) {
          return reject({
            status: 500,
            message: "Error when removing author.",
          });
        }

        return resolve({
          status: 200,
          message: "Author removed successfully.",
        });
      });
    });
  }
}
