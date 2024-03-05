import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ProjectModule } from './projects/projects.module';
import { Project } from './projects/entities/project.entity';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        UserModule,
        ProjectModule,
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db/sql',
            synchronize: true,
            entities: [User, Project],
        }),
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
