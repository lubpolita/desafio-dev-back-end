import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('User')
export default class User {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  username: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date
}
