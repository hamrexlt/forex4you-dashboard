import { BaseCommand, inject } from "@adonisjs/core/build/standalone";
import User from "../app/Models/User";

export default class Tinker extends BaseCommand {
	/**
	 * Command name is used to run the command
	 */
	public static commandName = "tinker";

	/**
	 * Command description is displayed in the "help" output
	 */
	public static description = "";

	public static settings = {
		/**
		 * Set the following value to true, if you want to load the application
		 * before running the command. Don't forget to call `node ace generate:manifest`
		 * afterwards.
		 */
		loadApp: true,

		/**
		 * Set the following value to true, if you want this command to keep running until
		 * you manually decide to exit the process. Don't forget to call
		 * `node ace generate:manifest` afterwards.
		 */
		stayAlive: false,
	};

	@inject()
	public async run() {
		const users = await User.all();
		// this.logger.info('Hello world!')
		console.log(JSON.stringify(users, null, 2));
	}
}
