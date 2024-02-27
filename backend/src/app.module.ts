import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
    imports: [
        UserModule,
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db/sql',
            synchronize: true,
            entities: [User],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}