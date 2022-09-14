import { User } from "./src/entities/user";
import { DataSource } from "typeorm";
import { Order } from "./src/entities/order";
import { Product } from "./src/entities/product";
import { Stock } from "./src/entities/stock";

export const MainDs = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: undefined,
  database: 'store',
  synchronize: true,
  logging: false,
  entities: [User, Order, Product, Stock],
  subscribers: [],
  migrations: []
})