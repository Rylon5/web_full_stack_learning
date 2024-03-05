import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
    @IsNotEmpty({ message: 'username must not be empty' })
    @IsString()
    username: string;

    @IsNotEmpty({ message: 'password must not be empty' })
    @IsString()
    password: string;
}
