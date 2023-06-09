import { DateTime } from "luxon";
import { column, BaseModel, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";
import Transaction from "./Transaction";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column({
    serialize(value) {
      return Boolean(value);
    },
  })
  public isVerified: boolean;

  @column()
  public fullName: string;

  @column()
  public email: string;

  @column()
  public username: string;

  @column()
  public country: string;

  @column()
  public phoneNumber: number;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public rememberMeToken: string | null;

  @column()
  public profit: number;

  @column()
  public balance: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Transaction)
  public transactions: HasMany<typeof Transaction>;

  // @beforeSave()
  // public static async hashPassword(user: User) {
  //   if (user.$dirty.password) {
  //     user.password = await Hash.make(user.password);
  //   }
  // }
}
