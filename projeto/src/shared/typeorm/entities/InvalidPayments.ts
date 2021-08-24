import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('InvalidPayments')
export class InvalidPayments {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  idRemittance: string

  @Column()
  idCreditor: string

  @Column()
  idEnteDebtor: string

  @Column()
  initialValue: number

  @Column()
  finalValue: number

  @CreateDateColumn()
  data: Date

  @Column()
  status: string

  @Column({ nullable: true })
  reason: string
}
