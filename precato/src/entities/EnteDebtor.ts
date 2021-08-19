import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class EnteDebtor {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    length: 100
  })
  name: string

  @Column({
    length: 14,
    unique: true
  })
  cnpj: string
}
