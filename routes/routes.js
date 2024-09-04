const {
  defaultRoutes,
  addEmployee,
  aboutUs,
} = require("../controller/controller");

// exporting all routes with the help of router
module.exports = function (router) {
  // router part
  router.get("/", defaultRoutes);

  router.post("/addemployee", addEmployee);

  router.get("/aboutus", aboutUs);
};
