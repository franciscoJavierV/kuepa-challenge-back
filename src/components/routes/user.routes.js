const { authJwt } = require("../../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //get all users
  app.get("/users", controller.findAll);

  //get user by id
  app.get("/user/:id/", controller.findOne);
 
   //get user by id
   app.get("/user/role/", controller.findbyrole);

  //delete by id
  app.delete("/", controller.delete);

  // delete all users
  app.delete("/allusers", controller.deleteAll);

  // updat user by id
  app.put("/update/user/:id", controller.update);


  //test user company
  app.get(
    "/test/company",
    [authJwt.verifyToken, authJwt.isCompany],
    controller.companyBoard
  );
  
  //test all access
  app.get("/api/test/all", controller.allAccess);


  //test user coallier
  app.get(
    "/test/coallier",
    [authJwt.verifyToken, authJwt.isCoallier],
    controller.coallierBoard
  );

  //test user admin
  app.get(
    "/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

};
