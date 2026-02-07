import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
	protected tableName = "wallets";

	public async up() {
		this.schema.alterTable(this.tableName, (table) => {
			table.string("block_chain").defaultTo("");
		});
	}

	public async down() {
		// this.schema.dropTable(this.tableName)
	}
}
