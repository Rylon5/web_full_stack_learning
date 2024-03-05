import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'username must not be empty' })
    @IsString()
    username: string;

    @IsNotEmpty({ message: 'password must not be empty' })
    @IsString()
    password: string;

    @IsNotEmpty({ message: 'first name must not be empty' })
    @IsString()
    firstName: string;

    @IsNotEmpty({ message: 'last name must not be empty' })
    @IsString()
    lastName: string;

    @IsNotEmpty({ message: 'age must not be empty' })
    @IsNumber()
    @IsPositive({ message: 'only positive numbers allowed' })
    age: number;
}
