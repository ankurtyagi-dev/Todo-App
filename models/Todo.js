import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 50
        },
        description: {
            type: String,
            required: true,
            maxlength: 50
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now()
        }
    }
)

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;