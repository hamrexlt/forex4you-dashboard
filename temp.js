import fs from "node:fs";
import coins from "./coin.json";

const data = Array.from(coins)
	.filter((coin) => coin.is_active !== false)
	.map((coin) => coin.name);
fs.writeFileSync("./coin.json", JSON.stringify(data));
// console.log(data);
