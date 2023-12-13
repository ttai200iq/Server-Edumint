const router = require("express").Router();
const usersprocess = require("./usersprocess");

router.post("/Signup", async (req, res) => {
  const user = await usersprocess.Signup(req.body);
  res.status(200).json(user);
});

router.get("/", async (req, res) => {
  const user = await usersprocess.getAllUsers();
  res.status(200).json(user);
});

router.post("/getByEmail", async (req, res) => {
  console.log(req.body.email);
  const user = await usersprocess.getByEmail(req.body.email);
  res.status(200).json(user);
});

router.post("/createNewUser", async (req, res) => {
  const newinfoUser = await usersprocess.createNewUser(
    req.body.email,
    req.body.firstname,
    req.body.lastname,
    req.body.password,
    req.body.role
  );
  res.status(200).json(newinfoUser);
});

router.post("/deleteUser", async (req, res) => {
  const user = await usersprocess.deleteUser(req.body.email);
  res.status(200).json(user);
});

router.put("/changePassword", async (req, res) => {
  const pwdchange = await usersprocess.changePassword(
    req.body.email,
    req.body.password,
    req.body.newpassword
  );
  res.status(200).json(pwdchange);
});

router.get("/findUserById", async (req, res) => {
  const user = await usersprocess.findUserById(req.body.id);
  res.status(200).json(user);
})

module.exports = router;
