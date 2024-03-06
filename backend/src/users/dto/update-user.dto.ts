import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
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

    @IsNotEmpty({ message: 'last name must not be empty' })
    @IsString()
    lastName?: string;

    @IsNotEmpty({ message: 'age must not be empty' })
    @IsNumber()
    @IsPositive({ message: 'only positive numbers allowed' })
    age?: number;

    @IsNotEmpty({ message: 'mail must not be empty ' })
    @IsEmail()
    mail?: string;
}
