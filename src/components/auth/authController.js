const usersService = require('../users/usersService');

async function provider (req, res, next){
  const { body } = req;
  try {
    const queriedUser = await usersService.getOrCreateUser({body}  );

    const { _id: id, name, email, role, picture } = queriedUser;
    const payload = {
      id: id,
      name,
      email,
      role,
      picture,
    };
    return res.status(200).json({ user: payload });
  } catch (error) {
    next(error);
  } 
}

module.exports = {
    provider,
};

