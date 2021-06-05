
require('dotenv').config();

const config ={
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  
  //api
  apiUrl: process.env.API_URL,
  apiKeyToken : process.env.API_KEY_TOKEN,
  //database
  dbURI : process.env.MONGODB_URI,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  //jwt--oauth
  authJwtSecret: process.env.AUTH_JWT_SECRET, 
  googleClientId : process.env.GOOGLE_CLIENT_ID,
  googleClientSecret : process.env.GOOGLE_SECRET,
  linkedinClientId : process.env.LINKEDIN_CLIENT_ID,
  linkedinClientSecret : process.env.LINKEDIN_SECRET,
  facebookClientId : process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret : process.env.FACEBOOK_CLIENT_SECRECT,
  //scripts
  defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
  defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
  //token
  publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
  adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN
};
module.exports = {config};
