const router = require('express').Router();

//CRUD Operations

/**
 *@api {get} /places Get Places Information
 *@apiName GetPlaces
 *@apiGroup Places
 *
 *@apiSuccess {Object[]} places array of places object belonging to Place
 *
 *@apiError NotFound Data not Found
 *@apiErrorExample Error-Response:
 *
 *
 * HTTP/1.1 404 Not Found
 * {
 *  error:"Place with id not found."
 * }
 *
 */
router.get('/places', (req, res) => {});

/**
 *@api {get} /places/:id Get Place
 *@apiName GetPlace
 *@apiGroup Place
 *
 *@apiParam {Number} id Place id
 *
 *@apiSuccess {Number} place_id Place Id
 *@apiSuccess {String} place_name Place Name
 *@apiSuccess {String} place_number Place Contact
 *@apiSuccess {String} place_description Place Description
 *@apiSuccess {String} place_image Place Image
 *@apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "status":"success",
 *  "message":"Places retrieved!"
 *  {
 *    "place_id":2,
 *    "place_name":"10",
 *    "place_number":"03341568877",
 *    "place_image":"ayan.png",
 *    "place_description":"No. of bed rooms, surround and etc."
 *  }
 * }
 *
 *@apiError PlaceNotFound The id of the Place was not found
 *@apiErrorExample Error-Response:
 *
 * HTTP/1.1 404 Not Found
 * {
 *  error:"Place with id not found."
 * }
 *
 */
router.get('/places/:id', (req, res) => {});

/**
 *@api {post} /places/create Add Place
 *@apiName AddPlace
 *@apiGroup Place
 *
 *@apiParam {String} name Place name, not unique
 *@apiParam {String} description Place description
 *@apiParam {String} image Place image
 *
 *@apiParamExample Example Body:
 *{
 *  "place_name":"Johar Town",
 *  "place_email":"ayan1@gmailcom",
 *  "place_description":"Place Explaination"
 *  "place_image":"ayan.png",
 *}
 *
 *@apiSuccess {Number} place_id Place id
 *@apiSuccess {String} place_name Place Name
 *@apiSuccess {String} place_number Place Contact
 *@apiSuccess {String} place_image Place Image
 *@apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 *
 *{
 *   "status":"success",
 *   "message":"Created!"
 *}
 */
router.post('/places/create', (req, res) => {});

/**
 *@api {put} /places/:id Put Place
 *@apiName UpdatePlace
 *@apiGroup Place
 *
 *@apiParam {Number} id Place id
 *
 *@apiSuccess {Number} place_id Place Id
 *@apiSuccess {String} place_name Place Name
 *@apiSuccess {String} place_number Place Contact
 *@apiSuccess {String} place_description Place Description
 *@apiSuccess {String} place_image Place Image
 *@apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *   "place_id":2,
 *   "place_name":"10",
 *   "place_number":"03341568877",
 *   "place_image":"ayan.png",
 *   "place_description":"No. of bed rooms, surround and etc."
 * }
 *
 *@apiError PlaceNotFound The id of the Place was not found
 *@apiErrorExample Error-Response:
 *
 * HTTP/1.1 404 Not Found
 * {
 *  error:"Place with id not found."
 * }
 *
 */
router.put('/places/:id', (req, res) => {});
/**
 *@api {delete} /places/:id Delete Place
 *@apiName DeletePlace
 *@apiGroup Place
 *
 *@apiParam {Number} id Place id
 *
 *@apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *   "status":"success",
 *   "message":"Deleted!!"
 * }
 *
 *@apiError PlaceNotFound The id of the Place was not found
 *@apiErrorExample Error-Response:
 *
 * HTTP/1.1 404 Not Found
 * {
 *  error:"Place with id not found."
 * }
 *
 */
router.delete('/places/delete:id', (req, res) => {});

//Admin Data

/**
 *@api {post} /Signup User
 *@apiName Signup User
 *@apiGroup Signup
 *
 *@apiParam {Number} id Id of user
 *@apiParam {String} user_name Name of the user
 *@apiParam {String} user_password Password of the user
 *
 *
 *@apiSuccess {String} user_number Number of the user
 *@apiSuccess {String} user_password Password of the user
 *@apiSuccess {String} user_name Name of the user
 *
 *
 *@apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  {
 *      user_name:"Ayan Bin Tahir",
 *      user_email:"ayan@gmail.com
 *  }
 *   "status":"success",
 *   "message":"Deleted!!"
 * }
 *
 *@apiError PlaceNotFound The id of the Place was not found
 *@apiErrorExample Error-Response:
 *
 * HTTP/1.1 404 Not Found
 * {
 *  error:"Place with id not found."
 * }
 *
 */
router.post('/places/signup', (req, res) => {});
