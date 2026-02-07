/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import User from "App/Models/User";
import Route from "@ioc:Adonis/Core/Route";
import Database from "@ioc:Adonis/Lucid/Database";
import Fuse from "fuse.js";
import coins from "../coin.json";

// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })

Route.on("/").redirect("/auth/login");

Route.get("/users", async () => {
	const users = await User.all();
	// console.log(JSON.stringify(users, null, 2))
	return users;
});

// Auth Stuff
Route.group(() => {
	Route.get("/login", "AuthController.loginShow")
		.as("login.show")
		.middleware(["bounce-login-page"]);
	Route.get("/signup", "AuthController.signupShow").as("signup.show");
	Route.get("/logout", "AuthController.logout").as("logout");

	Route.post("/login", "AuthController.login").as("login");
	Route.post("/signup", "AuthController.signup").as("signup");
}).prefix("auth");

// Admin Stuff

Route.group(() => {
	Route.get("/", "AdminController.users");
	Route.get("/list-users", "AdminController.users").as("users.list");
	Route.get("/wallets", "WalletController.show").as("wallets.show");
	Route.get("/add-topup", "AdminController.addTopupShow").as("addTopUp.show");
	Route.get("/reduce-topup", "AdminController.reduceTopupShow").as(
		"reduceTopUp.show",
	);
	Route.get("/users-deposit", "AdminController.usersDepositShow").as(
		"usersDeposit.show",
	);
	Route.get("/users-withdraws", "AdminController.usersWithdrawsShow").as(
		"usersWithdraws.show",
	);
	Route.post("/user/configure", "AdminController.configureUser").as(
		"user.configure",
	);
	Route.post("/user/topup/add", "AdminController.addTopUp").as("topup.add");
	Route.post("/user/topup/reduce", "AdminController.reduceTopUp").as(
		"topup.reduce",
	);
	Route.get("/user/withdraw/:id/approve", "AdminController.approveWithdrawal");

	Route.get("/wallets/:id/delete", "WalletController.delete").as(
		"wallets.delete",
	);
	Route.get("/user/:id/delete", "AdminController.deleteUser").as("user.delete");

	Route.get("/users-get-all.json", async () => {
		const users = await User.query();
		const newUsers: any = [];
		users.map((user) => newUsers.push(user.toJSON()));
		return users;
	});

	Route.get("/send-mail", "AdminController.sendMailShow");
	Route.post("/send-mail", "AdminController.sendMail").as("send.mail");

	Route.post("/wallets", "WalletController.create").as("wallets.create");
})
	.prefix("admin")
	.middleware("admin");

// User/Client Stuff
Route.group(() => {
	Route.get("/", "TradeCenterController").as("trade-center");

	Route.get("/deposit", "DepositController.show").as("deposit.show");
	Route.get("/withdraw", "WithdrawController.show").as("withdraw.show");
	Route.get("/profile", "ProfileController.show").as("profile.show");
	Route.get("/change-password", "ProfileController.changePasswordShow").as(
		"change-password.show",
	);
	Route.get("/wallets", async () => {
		const wallets = await Database.rawQuery(
			"select wallet_name as coin from wallets",
		);
		return wallets[0] as any[];
	});
	Route.get("/coins", async ({ request }) => {
		const page = request.qs().page;
		const search = request.qs().search;
		const per_page = 10;
		const startIndex = Math.max(0, (page - 1) * per_page);
		const endIndexExclusive = startIndex + per_page;

		if (search && Array.isArray(coins)) {
			const fuse = new Fuse(coins, {
				includeScore: true,
				ignoreLocation: true,
				threshold: 0.35,
			});

			const results = fuse.search(search);
			// results are ordered by score; map to items
			const matchedItems = results.map((r) => r.item);
			const pageItems = matchedItems.slice(startIndex, endIndexExclusive);
			const matched = matchedItems.length;
			// const total_pages = Math.max(1, Math.ceil(matched / per_page));
			return {
				results: pageItems,
				count_filtered: matched,
			};
		}

		const pageItems: string[] = [];

		let matched = 0; // count of items that pass filter
		for (const item of coins) {
			if (
				search &&
				item.toLocaleLowerCase() !== (search as string).toLocaleLowerCase()
			)
				continue;
			// if (filter && !filter(item)) continue;
			if (matched >= startIndex && matched < endIndexExclusive) {
				pageItems.push(item);
				// small optimization: if we've filled the page and we don't need count, we could break,
				// but we must keep scanning to compute count_filtered, so we continue.
			}
			matched++;
		}
		//   const total_pages = Math.max(1, Math.ceil(matched / per_page));

		return { results: pageItems, count_filtered: matched };
	});

	Route.post("/change-password", "ProfileController.changePassword").as(
		"change-password",
	);
	Route.post("/withdraw", "WithdrawController.withdraw").as("withdraw");
	Route.post("/withdraw/by/address", "WithdrawController.withdrawByAddress").as(
		"withdraw-address",
	);
	Route.post("/deposit", "DepositController.deposit").as("deposit");
})
	.prefix(":username")
	.middleware("auth")
	.middleware("bounce-unrecognised-url-username");
