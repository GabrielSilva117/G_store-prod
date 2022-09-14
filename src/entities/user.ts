import express from 'express'
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm'

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    length: 50
  })
  first_name: string

  @Column({
    length: 50
  })
  last_name: string

  @Column({
    length: 150,
    unique: true
  })
  email: string

  @Column({
    type: 'numeric'
  })
  age: number

  @Column({
    length: 80
  })
  address: string

  @Column({
    length: 11
  })
  cpf: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}
