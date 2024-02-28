import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project')
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', nullable: false, length: 64 })
    name: string;

    @Column({ name: 'description', nullable: true })
    description: string;

    @Column({
        name: 'link',
        nullable: false,
        default: 'https://github.com/Rylon5?tab=repositories',
    })
    link: string;
}
