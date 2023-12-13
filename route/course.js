const router = require("express").Router();
const courseprocess = require("./courseprocess");

router.get("/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  const course = await courseprocess.getAllcourses();
  res.status(200).json(course);
});

router.post("/addCourse", async (req, res, next) => {
  const course = await courseprocess.addCourse(
    req.body.user_id_,
    req.body.title_,
    req.body.description_,
    req.body.curriculum_,
    req.body.duration_,
    req.body.enrolled_,
    req.body.lectures_,
    req.body.price_,
    req.body.image_
  );
  res.status(200).json(course);
});

module.exports = router;
