import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { ResultDto } from './dto/result-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const newCustomer = this.customerRepository.create(createCustomerDto);

    const checkUsername = await this.customerRepository.findOne({
      username: newCustomer.username,
    });
    const checkEmail = await this.customerRepository.findOne({
      email: newCustomer.email,
    });

    if (checkEmail || checkUsername) {
      throw new HttpException(
        'Usuário ou email já cadastrados!',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.customerRepository.save(newCustomer);
    return <ResultDto>{
      status: true,
      mensage: 'Usuário criado com sucesso',
    };
  }

  findOne(id: number) {
    return this.customerRepository.findOne(id);
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const checkId = await this.findOne(id);

    if (checkId) {
      this.customerRepository.update({ id }, updateCustomerDto);
      return 'Usuário atualizado com sucesso!';
    }

    throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
  }

  async remove(id: number) {
    const checkId = await this.findOne(id);

    if (checkId) {
      this.customerRepository.delete(id);
      return 'Usuário deletado!';
    }

    throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
  }
}
