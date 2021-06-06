const { User } = require("./User");

async function findByEmail(emailB) {
  const user = await User.findOne({ email: emailB });
  return user;
}

async function createUser( user ) {
  const { name, email, role, picture } = user.user;
  console.log("nuevo nombre",picture)
  const createUserId = await User.create({
    name,
    email,
    role,
    picture : picture
  });
  return createUserId;
}
//validating facebook login 
async function getOrCreateUser(users) {
  const {name, email, role, picture } = users.body
  const queriedUser = await findByEmail(email);
  if (queriedUser) {
    return queriedUser;
  }
 
  const user = {
    name : name,
    email: email,
    role : role,
    picture : picture.data,
  }
  await createUser({user});
  return await findByEmail(email);
}


module.exports = {
  createUser,
  findByEmail,
  getOrCreateUser,
};
