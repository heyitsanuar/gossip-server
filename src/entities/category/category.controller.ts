import { Category, ICategory } from "./category.model";
import { APIResponse } from "../../app/models/response.interface";

export class CategoryController {
  getCategories(): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Category.find({}, (err, categories) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when looking for the categories.",
          });
        }

        return resolve({
          status: 200,
          data: categories,
        });
      });
    });
  }

  getCategoryById(id: string): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Category.findById(id, (err, category) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when looking for the category.",
          });
        }

        return resolve({
          status: 200,
          data: category,
        });
      });
    });
  }

  createCategory(category: ICategory): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      const newCategory = new Category(category);

      newCategory.save((err, savedCategory) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when creating the category",
          });
        }

        return resolve({
          status: 200,
          data: savedCategory,
        });
      });
    });
  }

  updateCategory(category: ICategory, id: string): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Category.findByIdAndUpdate(id, category, { new: true }, (err, updatedCategory) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when updating the category.",
          });
        }

        return resolve({
          status: 200,
          data: updatedCategory,
        });
      });
    });
  }

  removeCategory(id: string): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Category.findByIdAndRemove(id, (err, removedCategory) => {
        if (err) {
          return reject({
            status: 500,
            message: "Error when removing category.",
          });
        }

        return resolve({
          status: 200,
          message: "Category removed successfully.",
        });
      });
    });
  }
}
