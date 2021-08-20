import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Creditor')
export class Creditor {
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
  cpf: string

  @Column({
    length: 50
  })
  registerStatus: string
}
