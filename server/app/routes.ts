export function setRouters(app) {
  app.get('/', (req, res) => {
    res.send('Hey');
  });
}
