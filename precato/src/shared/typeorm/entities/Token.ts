import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'
import User from './User'

@Entity('Tokens')
export default class Token {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  token: string

  @CreateDateColumn()
  created_at: Date

  @OneToOne(() => User)
  @JoinColumn()
  user: User
}
