const DB = require("../models/item_models");

const users = (email) => {
  return new Promise(async (res, rej) => {
    try {
      var u = await Users.findOne({ email: email });
      res({ status: true, data: u });
    } catch (error) {
      rej({ status: false, message: "Error Occured" });
    }
  });
};

const getByEmail = (email) => {
  return new Promise(async (res, rej) => {
    try {
      await DB.Users.findOne({ email: email })
        .then((data) => {
          console.log(data);
          res({ status: true, data: data });
        })
        .catch((err) => {
          rej({ status: false, mes: "ERR" });
        });
    } catch (error) {
      rej({ status: false, mes: "ERR" });
    }
  });
};

const Signup = (user) => {
  return new Promise(async (res, rej) => {
    try {
      let users = new DB.Users(user);
      users
        .save()

        .then((data) => {
          console.log(data);
          res({ status: true, data: data });
        })

        .catch((err) => {
          rej({ status: false, mes: "DB ERR" });
        });
    } catch (error) {
      rej({ status: false, mes: "ERR" });
    }
  });
};

const getAllUsers = () => {
  return new Promise(async (res, rej) => {
    try {
      await DB.Users.find({})
        .then((data) => {
          console.log(data);
          res({ status: true, data: data });
        })
        .catch((err) => {
          rej({ status: false, mes: "ERR" });
        });
    } catch (error) {
      rej({ status: false, mes: "ERR" });
    }
  });
};

const createNewUser = (email_, firstname_, lastname_, password_, role_ ) => {
  return new Promise(async (res, rej) => {
    try {
      await DB.Users.findOne({ email: email_ })
        .then(async (data) => {
          console.log(data);
          if (data == null) {
            await new DB.Users({
              email: email_,
              password: password_,
              firstname: firstname_,
              lastname: lastname_,
              role: role_,
            })
              .save()
              .then((data) => {
                res({ status: true, data: "ok" });
              })

              .catch((err) => {
                res({ status: false, mes: "DB err" });
              });
          } else {
            res({ status: false, mes: "Email already exist" });
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

const deleteUser = (email) => {
  return new Promise(async (res, rej) => {
    try {
      await DB.Users.deleteOne({ email: email })
        .then((data) => {
          if (data.deletedCount) {
            res({ status: true, mes: "User deleted" });
          } else {
            res({ status: true, mes: "User undefined" });
          }
        })
        .catch((err) => {
          res({ status: false, mes: "ERR" });
        });
    } catch (error) {
      rej({ status: false, mes: "ERR" });
    }
  });
};

const findUserById = (id) =>{
  return new Promise(async (res, rej) => {
    try {
      console.log(id)
      await DB.Users.findOne({_id:id})
        .then((data) => {
          console.log(data)
          if (data == null) {
            res({ status: false, mes: "User undefined" });
          } else {
            res({ status: true, data: data.firstname + " " + data.lastname });
          }
        })
        .catch((err) => {
          rej({ status: false, mes: "DB err" });
        });
    } catch (error) {
      rej({ status: false, mes: "ERR" });
    }
  });
}

const changePassword = (email, password, newpassword) => {
  return new Promise(async (res, rej) => {
    try {
      await DB.Users.findOne({ email: email })
        .then(async (data) => {
          if (data == null) {
            res({ status: false, mes: "User undefined" });
          } else {
            if (data.password == password) {
              await DB.Users.findOneAndUpdate(
                { email: email },
                { password: newpassword }
              )
                .then((data) => {
                  res({
                    status: true,
                    mes: "Password changed",
                    email: email,
                    password: newpassword,
                  });
                })
                .catch((err) => {
                  res({ status: false, mes: "DB err" });
                });
            } else {
              res({ status: false, mes: "Wrong password" });
            }
          }
        })
        .catch((err) => {
          res({ status: false, mes: "DB err" });
        });
    } catch (error) {
      rej({ status: false, mes: "ERR" });
    }
  });
};

module.exports = {
  users,
  Signup,
  getByEmail,
  getAllUsers,
  createNewUser,
  deleteUser,
  changePassword,
  findUserById,
};
