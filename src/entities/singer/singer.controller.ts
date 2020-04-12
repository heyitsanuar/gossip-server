import { Singer, ISinger } from "./singer.model";
import { APIResponse } from "../../app/models/response.interface";

export class SingerController {
  getSingers(): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Singer.find({}, (err, singers) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when looking for the singers.",
          });
        }

        return resolve({
          status: 200,
          data: singers,
        });
      });
    });
  }

  getSingerById(id: string): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Singer.findById(id, (err, singer) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when looking for the singer.",
          });
        }

        return resolve({
          status: 200,
          data: singer,
        });
      });
    });
  }

  createSinger(singer: ISinger): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      const newSinger = new Singer(singer);

      newSinger.save((err, savedSinger) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when creating the singer.",
          });
        }

        return resolve({
          status: 200,
          data: savedSinger,
        });
      });
    });
  }

  updateSinger(singer: ISinger, id: string): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Singer.findByIdAndUpdate(id, singer, { new: true }, (err, updatedSinger) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when updating the singer.",
          });
        }

        return resolve({
          status: 200,
          data: updatedSinger,
        });
      });
    });
  }

  removeSinger(id: string): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Singer.findByIdAndRemove(id, (err, removedSinger) => {
        if (err) {
          return reject({
            status: 500,
            message: "Error when removing singer.",
          });
        }

        return resolve({
          status: 200,
          message: "Singer removed successfully.",
        });
      });
    });
  }
}
