export function handleErr(err, req, res, next) {

  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({'message': 'Token Not Provided'});
  }
  console.log(err);

}
