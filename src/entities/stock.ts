import express from 'express'
import {
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  Entity
} from 'typeorm'
import { Product } from './product'

@Entity('stock')
export class Stock extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  units: number

  @Column({
    length: 10
  })
  color: string

  @OneToMany(() => Product, (product) => product.stock)
  product: Product[]
}
