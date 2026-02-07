import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import type { DateTime } from "luxon";

export default class Wallet extends BaseModel {
	@column({ isPrimary: true })
	public id: number;

	@column()
	public walletName: string;

	@column()
	public walletAddress: string;

	@column({ columnName: "block_chain" })
	public blockChain?: string | null;

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime;
}
