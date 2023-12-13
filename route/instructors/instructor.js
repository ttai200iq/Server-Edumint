const router = require("express").Router();
const instructorprocess = require("./instructorprocess");

router.get("/", async (req, res) => {
  res.status(200).json({
    Status: "INSTRUCTORS conected",
    project: "Dev A Project",
  });
});

router.post("/newInstructor", async (req, res) => {
  const instructor = await instructorprocess.addNew(
    req.body.id,
    req.body.nation,
    req.body.level,
    req.body.intro
  );
  res.status(200).json(instructor);
});

router.get("/getAllInstructorUserId",async(req,res)=>{
  const instructor = await instructorprocess.getAllInstructorUserId();
  res.status(200).json(instructor);
})

module.exports = router;
