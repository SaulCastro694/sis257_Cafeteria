import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadosModule } from './empleados/empleados.module';
<<<<<<< HEAD
=======
import { ClientesModule } from './clientes/clientes.module';
import { VentaModule } from './venta/venta.module';
>>>>>>> 06681c7a9e14dffca0646e5e04fa96e64e51dcf3

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '*/**/entities/*.{ts|js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductosModule,
    EmpleadosModule,
<<<<<<< HEAD
=======
    ClientesModule,
    VentaModule,
>>>>>>> 06681c7a9e14dffca0646e5e04fa96e64e51dcf3
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
