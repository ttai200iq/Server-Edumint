const DB = require("../models/item_models");

const getAllcourses = () => {
  return new Promise(async (res, rej) => {
    try {
      await DB.Courses.find({})
        .then((data) => {
          res({ status: true, data: data });
        })
        .catch((err) => {
          rej({ status: false, mess: "DB ERR" });
        });
    } catch (error) {
      rej({ status: false, mess: "ERR" });
    }
  });
};

const addCourse = (
  user_id_,
  title_,
  description_,
  curriculum_,
  duration_,
  enrolled_,
  lectures_,
  price_,
  image_
) => {
  return new Promise(async (res, rej) => {
    try {
      await DB.Courses.findOne({ title: title_ })
        .then(async (data) => {
          console.log(data);
          if (data == null) {
            await new DB.Courses({
              user_id: user_id_,
              title: title_,
              description: description_,
              curriculum: curriculum_,
              duration: duration_,
              enrolled: enrolled_,
              lectures: lectures_,
              price: price_,
              image: image_,
            })
              .save()
              .then((data) => {
                res({ status: true, data: "ok" });
              })

              .catch((err) => {
                res({ status: false, mes: "DB err" });
              });
          } else {
            res({ status: false, mes: "Course already exist" });
          }
        })
        .catch((err) => {
          rej({ status: false, mes: "DB ERR" });
        });
    } catch (error) {
      rej({ status: false, mes: "ERR" });
    }
  });
};

module.exports = {
  getAllcourses,
  addCourse,
};
