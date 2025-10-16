import { ConflictException, Injectable } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private empleadosRepository: Repository<Empleado>,
  ) {}
  async create(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    let empleado = await this.empleadosRepository.findOneBy({
      nombre: createEmpleadoDto.nombre.trim(),
      cargo: createEmpleadoDto.cargo.trim(),
      salario: createEmpleadoDto.salario,
      fechaIngreso: createEmpleadoDto.fechaIngreso,
    });
    if (empleado) throw new ConflictException('El empleado ya existe');
    empleado = this.empleadosRepository.create(createEmpleadoDto);
    return this.empleadosRepository.save(empleado);
  }

  async findAll(): Promise<Empleado[]> {
    return this.empleadosRepository.find({ order: { nombre: 'ASC' } });
  }

  async findOne(id: number): Promise<Empleado> {
    const empleado = await this.empleadosRepository.findOneBy({ id });
    if (!empleado) throw new ConflictException('El empleado no existe');
    return empleado;
  }

  async update(
    id: number,
    updateEmpleadoDto: UpdateEmpleadoDto,
  ): Promise<Empleado> {
    const empleado = await this.findOne(id);
    Object.assign(empleado, updateEmpleadoDto);
    return this.empleadosRepository.save(empleado);
  }
  async remove(id: number): Promise<Empleado> {
    const empleado = await this.findOne(id);
    return this.empleadosRepository.softRemove(empleado);
  }
}
