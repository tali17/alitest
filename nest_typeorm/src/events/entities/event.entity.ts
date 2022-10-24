import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Workshop } from './workshop.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'datetime' })
  createdAt: string;

  @OneToMany(() => Workshop, (workshops) => workshops.workshop)
  workshops: Workshop;
}
