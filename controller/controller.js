exports.defaultRoutes = (req, res) => {
  res.setHeader("content-type", "text/plain");
  res.status(200).send("Hello Prashant, Welcome to Node.JS Journey");
};
exports.addEmployee = function (req, res) {
  const { empName, empPwd } = req.body;
  res.end(`Hi ${empName}, your password is ${empPwd}`);
};
exports.aboutUs = (req, res) => {
  res.send("Welcome to about us page.");
};
