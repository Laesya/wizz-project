const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// Require and setup uploader to keep files in uploads folder
const multer = require('multer');

/* POST email and password and return jwt if authenticated successfull */
router.post('/signin', passport.authenticate('local', { session: false }), authController.signIn);
/**
 * @api {post} /auth/signin 2. Authenticate
 * @apiName Authenticate
 * @apiGroup auth
 *
 * @apiDescription If this email/password pair is known by the database, you will receive the JWT (jsonWebToken) in response.data.token
 *
 * @apiSuccess {200} email Valid email
 * @apiSuccess {200} password Matching password
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Success
 *    {
 *   "user": {
 *        "id": 42,
 *        "email": "john@doe.com",
 *        "isAdmin": false
 *           },
 *   "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx.yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy.zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
 *    }
 *
 * @apiErrorExample Error400:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Bad Request"
 *     }
 * @apiErrorExample Error401:
 *     HTTP/1.1 401 Unauthorized
 *     Unauthorized
 */

/* POST create new user. multer DON'T create an object, we can'T access it with req.avatar (ATM)*/
router.post('/signup', authController.signUp);
router.post('/reset', authController.forgetPassword);
router.put('/change-password', passport.authenticate('jwt', { session: false }), authController.changePassword);
router.delete('/delete-account', passport.authenticate('jwt', { session: false }), authController.deleteAccount);
/**
 * @api {post} /auth/signup 1. Sign Up
 * @apiName SignUp
 * @apiGroup auth
 *
 * @apiDescription Requests will go as x-www-form-urlencoded unless specified otherwise. 
 * To sign up you will need at least a valid email and a password. 
 * NB: user passwords, even encrypted, will never be returned from the API. 
 * To know more, see .scope('withoutPassword') sequelize method (in /controllers/usersController.js).
 *
 * @apiSuccess  email Valid email
 * @apiSuccess  password Valid password
 * @apiSuccess firstName The new user first name.
 * @apiSuccess lastName The new user last name.
 * @apiSuccess {avatarUrl=string} avatarUrl The URL of the new user avatar. IT MUST BE HOSTED! api/v1 does NOT support file upload for Users avatars.
 * @apiSuccess username The pseudo of the new user.
 * @apiSuccess {isAdmin=bool} isAdmin Should the new user have admin-level permissions ?
 * @apiSuccess birthdate The new user birthdate.
 * @apiSuccess gender The new user gender; must be in english to display properly on the backoffice (male/female/other)
 * @apiSuccess latitude The new user latitude; not used at the time.
 * @apiSuccess longitude The new user longitude; not used at the time.
 * @apiSuccess gradeId The new user grade. Get /grades to find the id you want.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Success
 *{
 *"user": {
 *    "id": 65,
 *    "firstName": "Maxine",
 *    "lastName": "Caulfield",
 *    "username": "MadMax",
 *    "email": "baeoverbay@blackwell.edu",
 *    "gender": "female",
 *    "birthdate": "1994-04-15T00:00:00.000Z",
 *    "latitude": "47.6062",
 *    "longitude": "122.3321",
 *    "avatarUrl": "http://freeimagehost.com/chloeBirthday.png",
 *    "gradeId": "1",
 *    "isAdmin": false,
 *    "updatedAt": "2019-06-16T19:51:08.572Z",
 *    "createdAt": "2019-06-16T19:51:08.572Z"
 *   },
 *"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoiZGFlbmVyeXNAZHJhZ29uc3RvbmUuaW8iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTYzMjcxNDY5fQ.XoTPUHDckBOoeJ987ZVnoxOBPuS8JTgHEtSCD-lVpms"
 * }
 *
 * @apiErrorExample Error400:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Bad Request"
 *     }
 */
module.exports = router;