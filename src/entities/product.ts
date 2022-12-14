import express from 'express'
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  BaseEntity,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { Order } from './order'
import { Stock } from './stock'

@Entity('product')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  price: number

  @Column({
    length: 3
  })
  type: string

  @Column({
    length: 20
  })
  category: string

  @ManyToOne(() => Order, (order) => order.product)
  order: Order

  @ManyToOne(() => Stock, (stock) => stock.product)
  stock: Stock

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}
