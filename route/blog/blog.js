const router = require("express").Router();
const blogprocess = require("./blogprocess")

router.get("/",async(req,res)=>{
    res.status(200).json({
        Status: "EDUCATION conected", project: "Dev A Project"
    })
})

module.exports = router