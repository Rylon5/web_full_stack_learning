import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto {
    @IsNotEmpty({ message: 'name must not be empty' })
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    link: string;
}
