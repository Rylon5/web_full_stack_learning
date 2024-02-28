import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
    ) {}
    async create(createProjectDto: CreateProjectDto) {
        const project = this.projectRepository.create(createProjectDto);
        return this.projectRepository.save(project);
    }

    async findAll() {
        return await this.projectRepository.find();
    }

    async findOne(id: number) {
        const project = await this.projectRepository.findOneBy({ id: id });
        if (!project) {
            throw new NotFoundException(`Object with ID ${id} not found`);
        }
        return project;
    }

    async update(id: number, updateProjectDto: UpdateProjectDto) {
        const project = this.projectRepository.findOneBy({ id: id });
        if (!project) {
            throw new NotFoundException(`Object with ID ${id} not found`);
        }
        Object.assign(project, updateProjectDto);
        return await this.projectRepository.save(updateProjectDto);
    }

    async remove(id: number) {
        const project = await this.projectRepository.findOneBy({ id: id });
        if (!project) {
            throw new NotFoundException(`Object with ID ${id} not found`);
        }
        return await this.projectRepository.delete(project);
    }
}
