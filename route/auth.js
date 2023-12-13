const router = require("express").Router();
const authprocess = require("./authprocess")

router.get("/",async(req,res)=>{
    res.status(200).json({
        Status: "EDUCATION conected", project: "Dev A Project"
    })
})

router.post("/Login",async(req,res)=>{
    // const usr = await authprocess.auth(req.body.user)
    res.status(200).json({Status: true})
})

module.exports = router