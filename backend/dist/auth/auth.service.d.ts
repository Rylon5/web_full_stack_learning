import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(username: string, pass: string): Promise<{
        access_token: string;
    }>;
}
