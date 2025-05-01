import { Schema, Document } from "mongoose";

export interface UserInterface extends Document 

export const userShema = new Schema({
  name: { type: String },
});
