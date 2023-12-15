const Koa = require("koa");
const static = require("koa-static")
const range = require("koa-range")
// const nodeVideo = require("node-video")
const path = require("path")
const app = new Koa();
const staticPath = '/public'
// app.use(nodeVideo({
//   extMatch: /\.mp[3-4]$/i
// }))
app.use(range)
app.use(static(
  path.join(__dirname,staticPath)
));

app.listen(39555, () => {
  console.log("111");
});
