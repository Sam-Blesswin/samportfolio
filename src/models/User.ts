import mongoose, { Document, Model } from "mongoose";

export interface UserDocument extends Document {
  username: string;
  password: string;
}

const UserSchema = new mongoose.Schema<UserDocument>(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User: Model<UserDocument> =
  mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);

export default User;
