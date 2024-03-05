import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'username', nullable: false, length: 128 })
    username: string;

    @Column({ name: 'password', nullable: false, length: 64 })
    password: string;

    @Column({ name: 'first name', nullable: false, length: 64 })
    firstName: string;

    @Column({ name: 'last name', nullable: false, length: 64 })
    lastName: string;

    @Column({ name: 'age', nullable: false })
    age: number;
}
