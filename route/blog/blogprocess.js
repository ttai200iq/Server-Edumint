const Register = require("../../models/item_models");

const test = (user) => {
  return new Promise(async (res, rej) => {
    try {
      res({ status: true, mess: "Test" });
    } catch (err) {
      rej({ status: false, message: "Error Occured" });
    }
  });
};

module.exports = { test };
