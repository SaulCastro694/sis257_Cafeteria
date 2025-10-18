import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEmpleadoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly nombre: string;

  @ApiProperty() 
  @IsNotEmpty({ message: 'El campo cargo es obligatorio' })
  @IsString({ message: 'El campo cargo debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo cargo no debe ser mayor a 100 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly cargo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo salario es obligatorio' })
  @IsInt({ message: 'El campo salario debe ser numérico' })
  @IsPositive({ message: 'El salario debe ser un número positivo' })
  readonly salario: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo fecha de Ingreso debe estar definido' })
  @IsDateString({}, { message: 'El campo fecha de Ingreso debe ser una fecha válida' })
  fechaIngreso: Date;
}