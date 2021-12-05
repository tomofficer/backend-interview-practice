const winston = require("winston")
var options = {
  file: {
    level: 'info',
    name: 'file.info',
    filename: `./app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 100,
    colorize: true,
  },
  errorFile: {
    level: 'error',
    name: 'file.error',
    filename: `./error.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 100,
    colorize: true,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

let logger = winston.createLogger({
  transports: [
    new (winston.transports.Console)(options.console),
    new (winston.transports.File)(options.errorFile),
    new (winston.transports.File)(options.file)
  ],
  exitOnError: false, // do not exit on handled exceptions
});


const router = require("express").Router();
const controller = require("./todo.controller");



router.route("/")
  .get(controller.list)
  .post(controller.create)

router
  .route("/:todo_id")
  .get()
//   .patch(/* Your code here */)
//   .delete(/* Your code here */);

module.exports = router;
