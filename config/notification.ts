/**
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import type { NotificationConfig } from "@ioc:Verful/Notification";

/*
|--------------------------------------------------------------------------
| Notification Mapping
|--------------------------------------------------------------------------
|
| List of available notification channels. You must first define them
| inside the `contracts/notification.ts` file before mentioning them here.
|
*/
export default {
	channel: "mail",
	channels: {
		/*
    |--------------------------------------------------------------------------
    | Mail channel
    |--------------------------------------------------------------------------
    |
    | Use this channel to send notifications via email.
    |
    */
		mail: {
			driver: "mail",
			//@ts-ignore
			mailer: "smtp",
		},
	},
	notificationsTable: "",
} as NotificationConfig;
