import express from "express";
import shopee from ".";

const app = express();
// Put this in your express server's index file
app.use("/shopee", shopee);
/* 
  querying this on the client side
    will look something like this

  where http://HOSTNAME/SERVER_PORT == http://localhost:5000
  fetch("http://localhost:5000/shopee/item/get?itemid=2625791160&shopid=168042480")
    .then((res) => res.json())
    .then((item) => setItem(item))
*/
// Required, unless you're already using a json parser (e.g bodyparser)
app.use(express.json());
app.use(express.static("."));

app.listen(5000, () => console.log("server running on 5000"));
