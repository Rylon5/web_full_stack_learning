import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
export declare class ProjectService {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Project>);
    create(createProjectDto: CreateProjectDto): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project>;
    findOneByName(name: string): Promise<Project>;
    update(id: number, updateProjectDto: UpdateProjectDto): Promise<UpdateProjectDto & Project>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
