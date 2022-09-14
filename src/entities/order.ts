import express from 'express'
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  DeleteDateColumn
} from 'typeorm'
import { User } from './user'
import { Product } from './product'

@Entity('order')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  inv_num: string

  @OneToOne(() => User)
  @JoinColumn()
  user_id: User

  @OneToMany(() => Product, (product) => product.order)
  product: Product[]

  @Column()
  cost: number

  @Column()
  units: number

  @CreateDateColumn()
  created_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}
