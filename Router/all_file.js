const express=require('express');
const router=express.Router()
const multer=require('multer')
const path=require("path");
const maxfilesize=1024 *1024;

// storage engine
const storage=multer.diskStorage({
	destination:'./Public/files',
	filename: (req,file,cb)=>{
		return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
	}
})

const upload=multer({ 
	storage:storage,
	limits:{ fileSize:maxfilesize}
       
    
}).single('file')

router.post("/uploadfile",function (req, res,next) {
    upload(req,res,function(err) {
        if(err) {
            res.send(err)
        }        
        res.send(`Name of file : ${req.file.originalname} 
		type of file : ${req.file.fieldname}
		Success,file uploaded!`)
        console.log(req.file);
        
            })     
    })

function errHandler(err,req,res,next){
	if(err instanceof multer.MulterError){
		res.json({
			sucesss:0,
			message: err.message
		})
	}
}

router.use(errHandler)


module.exports=router;
