import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Payments {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  idCreditor: string

  @Column()
  idEnteDebtor: string

  @Column({
    type: 'float'
  })
  initialValue: number

  @Column({
    type: 'float'
  })
  finalValue: number

  @CreateDateColumn()
  data: Date

  @Column()
  status: string

  @Column()
  reason: string
}
