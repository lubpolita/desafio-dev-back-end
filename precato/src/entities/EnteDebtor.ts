import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('EnteDebtor')
export class EnteDebtor {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    length: 100
  })
  name: string

  @Column({
    length: 18,
    unique: true
  })
  cnpj: string
}
