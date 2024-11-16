import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/uploads')
    },
    filename: (req,file, cb) => {
        // console.
        const uniqueNmae = `${file.originalname}`
        cb(null,uniqueNmae)
    }
})

// multer Instance 

const uploads = multer({storage:storage,
    fileFilter: (req, file, cb) => {
        // Optional: Validate file type
        if (file.mimetype !== 'application/pdf') {
            return cb(new Error('Only PDF files are allowed'), false);
        }
        cb(null, true);
    },
})

export const uploadTodo = uploads.single("pdfFilePath")

