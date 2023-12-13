const DB = require("../../models/item_models");

const addNew = (id, nation, level, intro) => {
  return new Promise(async (res, rej) => {
    try {
      let instructor = new DB.Instructor({
        user_id: id,
        nationality: nation,
        level: level,
        introduction: intro,
      });
      instructor.save()
      .then((data) => {
          res({ status: true, data: data });
      })
      .catch((err) => {
        rej({ status: false, mess: "DB ERR" });
      })
    } catch (error) {
      rej({ status: false, mess: "ERR" });
    }
  });
};

module.exports = {
    addNew,
};
