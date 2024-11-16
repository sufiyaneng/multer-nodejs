import Todo from "../Model/user.model.js"


export const createTodo = async (req,res)=>{

    const {title,description} =req.body;

    try {
        console.log(req.file.path)
        const filePath = req.file.path;

        let todo = new Todo({ title: title, description: description, pdfFilePath:filePath })

        await todo.save();
        res.send("Todo created successfully")
    } catch (error) {
        console.error('Error adding Todo:', error.message);
        res.status(500).send('Failed to add Todo.');
    }
}