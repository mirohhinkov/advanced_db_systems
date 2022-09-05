const path = require('path');
const express = require('express');
const app = express();
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// const populating = require('./utils/populating');

const reactViews = require('express-react-views');

const postController = require('./conroller/postController');
const authController = require('./conroller/authController');
const handlers = require('./utils/routerHandlers');
const reviewController = require('./conroller/reviewController');

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

//logging
// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

app.use((req, res, next) => {
  req.loggedIn = 'logged' in req.cookies;
  next();
});

app.use(handlers.addCurrentUser);

// populating();

const router = express.Router();

app.use('/', router);

router.route('/').get(handlers.latestPosts);
router.route('/posts').get(handlers.posts);
router.route('/posts/:page/:direction').get(handlers.pagedPosts);
router.route('/login').get(handlers.userLogin).post(handlers.userLoging);
router.route('/posts/:id').get(postController.singlePost);

router
  .route('/review/:id')
  .get(reviewController.addReviewForm)
  .post(reviewController.addReview);
router
  .route('/editReview/:id')
  .get(reviewController.editForm)
  .post(reviewController.editReview);
router.route('/deleteReview/:id').get(reviewController.delete);

app.all('*', (req, res, next) => {
  next(new Error(`The url ${req.originalUrl} not found on the server!`));
});
module.exports = app;
