import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserService } from '../users/users.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    login(signInDto: SignInDto): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    register(createUserDto: CreateUserDto): Promise<import("../users/entities/user.entity").User>;
}
