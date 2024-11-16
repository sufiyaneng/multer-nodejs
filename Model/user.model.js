import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    pdfFilePath: { type: String, required: true }, // Store the file path as a string
});

const Todo = mongoose.model('Todo', TodoSchema);
export default Todo;
