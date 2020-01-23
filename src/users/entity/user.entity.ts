import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import 'reflect-metadata';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'first_name' })
  firstName: string;
  @Column({ name: 'last_name' })
  lastName: string;
  @Column()
  address: string;
  @Column({ name: 'delivery_area' })
  deliveryArea: string;
  @Column({ name: 'delivery_days' })
  deliveryDays: string;
  @Column()
  phone: string;
  @Column({ name: 'role_fk' })
  roleFK: number;
}
