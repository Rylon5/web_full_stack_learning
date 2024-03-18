import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const saltRounds = 10;
        const user = this.userRepository.create(createUserDto);
        user.password = await bcrypt.hash(user.password, saltRounds);
        return await this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(id: number) {
        const user = await this.userRepository.findOne({ where: { id: id } });
        if (!user) {
            throw new NotFoundException(`Object with ID ${id} not found`);
        }
        return user;
    }

    async findOneByName(username: string) {
        const user = await this.userRepository.findOneBy({
            username: username,
        });
        if (!user) {
            throw new NotFoundException(`User with name ${username} not found`);
        }
        return user;
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        const user = await this.findOne(id);
        Object.assign(user, updateUserDto);
        return await this.userRepository.save(user);
    }

    async remove(id: number) {
        const user = await this.findOne(id);
        if (!user) {
            throw new NotFoundException(`Object with ID ${id} not found`);
        }
        return await this.userRepository.delete(user);
    }
}
