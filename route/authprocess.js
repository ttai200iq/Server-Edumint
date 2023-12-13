const Register = require("../models/item_models");

const auth = (user) => {
  return new Promise(async (res, rej) => {
    try {
      res({ status: true, mess: "Test" });
    } catch (err) {
      rej({ status: false, message: "Error Occured" });
    }
  });
};

module.exports = { auth };
