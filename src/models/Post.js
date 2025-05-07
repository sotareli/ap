import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titlte: { type: String, required: true },
    description: { type: String },
    slug: { type: String }
}, { versionKey: false});

const post = mongoose.model("posts", postSchema);

export default post;

