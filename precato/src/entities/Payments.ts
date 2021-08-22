import { JoinColumn, Column, ManyToOne, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Creditor } from './Creditor'
import { EnteDebtor } from './EnteDebtor'

@Entity('Payments')
export class Payments {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
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

  @JoinColumn({ name: 'idCreditor' })
  @ManyToOne(() => Creditor)
  creditor: Creditor

  @JoinColumn({ name: 'idEnteDebitor' })
  @ManyToOne(() => EnteDebtor)
  ente_debtor: EnteDebtor
}
