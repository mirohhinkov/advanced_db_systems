/*
Takes as a parameter async function asyncFunc which returns a Promise, so  catch can be add to it.
Returns the same asyncFunc with added catch block which in case of an error
envoke the global error handler.
*/

module.exports = (asyncFunc) => {
  return (req, res, next) => {
    return asyncFunc(req, res, next).catch((err) => next(err));
  };
};
