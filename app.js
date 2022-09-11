const path = require('path');
const express = require('express');
const app = express();
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require('multer');

const upload = multer({ dest: 'public/img' });

// const populating = require('./utils/populating');

const reactViews = require('express-react-views');

const postController = require('./conroller/postController');
const authController = require('./conroller/authController');
const ownerController = require('./conroller/ownerController');
const reviewController = require('./conroller/reviewController');
const userController = require('./conroller/userController');

//REACT
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

// Defining folder to serve static content
app.use(express.static(path.join(__dirname, 'public')));

//Enable All CORS Requests
app.use(cors());

// body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  req.loggedIn = 'logged' in req.cookies;
  req.ownerLogged = 'owner' in req.cookies;

  next();
});

// Add current user
app.use(authController.addCurrentUser);

// populating();

const router = express.Router();

app.use('/', router);
// Home route
router.route('/').get(postController.latestPosts);
// Authentication routes
router
  .route('/login')
  .get(authController.userLogin)
  .post(authController.userLoging);
router.route('/owner').post(authController.ownerLogin);

//Post routes
router.route('/posts').get(postController.posts);
router.route('/posts/:page/:direction').get(postController.pagedPosts);
router.route('/posts/:id').get(postController.singlePost);

//Comments routes
router
  .route('/review/:id')
  .get(reviewController.addReviewForm)
  .post(reviewController.addReview);
router
  .route('/editReview/:id')
  .get(reviewController.editForm)
  .post(reviewController.editReview);
router.route('/deleteReview/:id').get(reviewController.delete);

router
  .route('/contact')
  .get(userController.sendMessage)
  .post(userController.saveMessage);

//Update user routes
// check if user or owner has logged in otherwise redirect to home page
app.use(authController.isLogged);
router
  .route('/updateEmail')
  .get(userController.updateEmail)
  .post(userController.doUpdateEmail);
router
  .route('/updatePassword')
  .get(userController.updatePassword)
  .post(userController.doUpdatePassword);

//Owner routes

app.use(authController.isOwnerLogged);
router.route('/dashboard').get(ownerController.dashboard);
router
  .route('/createPost')
  .get(postController.createNewPost)
  .post(postController.savePost);
router.route('/viewMessages').get(userController.viewMessages);
router.route('/deleteMessage/:id').get(userController.deleteMessage);

//All other routes
app.all('*', (req, res, next) => {
  next(new Error(`The url ${req.originalUrl} not found on the server!`));
});

//Error handler
module.exports = app;
