import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty({ message: 'username must not be empty' })
    @IsString()
    username?: string;

    @IsNotEmpty({ message: 'password must not be empty' })
    @IsString()
    password?: string;

    @IsNotEmpty({ message: 'first name must not be empty' })
    @IsString()
    firstName?: string;

    @IsOptional()
    @IsNotEmpty({ message: 'last name must not be empty' })
    @IsString()
    lastName?: string;

    @IsOptional()
    @IsNotEmpty({ message: 'age must not be empty' })
    @IsNumber()
    @IsPositive({ message: 'only positive numbers allowed' })
    age?: number;
}
