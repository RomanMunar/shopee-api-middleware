import express, { Response } from "express";
import { getItem, getItemRating, getShop, searchItems } from "./controllers";
const router = express.Router();

const doc = `<!DOCTYPE html><html lang=en><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><title>Shopee Api Middleware</title><body style=display:flex;flex-direction:column;align-items:center><div style=max-width:1100px;margin:auto;width:100%><h1>Shopee Api Middleware</h1><p>An express middlewaare for shopee's api<div><h3>Features</h3><ol><li>Uses native URLSearchParams<li>Autocomplete with Typescript<li>Can use shopee's Search, Rating, Shop, and Item</ol></div><div><h3>Installation</h3><ol><li>In your NodeExpress project, install shopee-api-middleware<pre style=padding:10px;background-color:#1F2937;color:#DBEAFE>npm i shopee-api-middleware</pre><li>Import it to your server<pre style=padding:10px;background-color:#1F2937;color:#DBEAFE>import shopee from "shopee-api-middleware</pre><li>Plug it to your express app<pre style=padding:10px;background-color:#1F2937;color:#DBEAFE>app.use("/shopee", shopee)</pre></div><div><h3>How to use</h3><p>On the client side, you'll have to fetch it using<pre style=display:inline>fetch()</pre>, It would look something like this,<pre style=padding:10px;background-color:#1F2937;color:#DBEAFE>
          const [items, setItems] = useState([]);
          
          fetch("http://localhost:5000/shopee/search?keyword=headphones)
            .then((res) => res.json())
            .then((results) => setItems(results))
        </pre></div></div>`;

router.route("/").get((req, res: Response) => res.send(doc.toString()));
router.route("/item/get").get(getItem);
router.route("/item/get_ratings").get(getItemRating);
router.route("/shop/get").get(getShop);
router.route("/search_items").get(searchItems);

export default router;
