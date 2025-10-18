<<<<<<< HEAD
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
=======
import { Venta } from 'src/venta/entities/venta.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
>>>>>>> 06681c7a9e14dffca0646e5e04fa96e64e51dcf3

@Entity('empleados')
export class Empleado {
  @PrimaryGeneratedColumn('identity')
  id: number;
<<<<<<< HEAD

  @Column('varchar', { length: 100 })
  nombre: string;

  @Column('varchar', { length: 100 })
  cargo: string;

  @Column('decimal', { precision: 10, scale: 2 })
  salario: number;

  @Column()
  fechaIngreso: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;
=======
  @Column('varchar', { length: 100 })
  nombre: string;
  @Column('varchar', { length: 50 })
  cargo: string;
  @Column('decimal', { precision: 10, scale: 2 })
  salario: number;
  @Column('date', { name: 'fecha_ingreso' })
  fechaIngreso: Date;
  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;
  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;
  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;

  @ManyToOne(() => Venta, (venta) => venta.empleados)
  ventas: Venta[];
>>>>>>> 06681c7a9e14dffca0646e5e04fa96e64e51dcf3
}
