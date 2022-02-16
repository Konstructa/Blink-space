import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Customer } from 'src/customer/entities/customer.entity';
import { Product } from 'src/product/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDER_REPOSITORY')
    private orderRepository: Repository<Order>,
    @Inject('CUSTOMER_REPOSITORY')
    private customerRepository: Repository<Customer>,
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const product = await this.productRepository.findOne(
      createOrderDto.product,
    );

    const customer = await this.customerRepository.findOne(
      createOrderDto.customer,
    );

    if (!product || !customer) {
      throw new HttpException(
        'Produto ou Usuário invalido',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    const newOrder = this.orderRepository.create({
      products_quantity: createOrderDto.products_quantity,
      product,
      customer,
    });

    if (product.quantity >= createOrderDto.products_quantity) {
      await this.orderRepository.save(newOrder);
      await this.productRepository.update(product.id, {
        quantity: product.quantity - createOrderDto.products_quantity,
      });

      return 'Pedido criado';
    }

    throw new HttpException(
      'Número de produtos superior ao estoque',
      HttpStatus.NOT_ACCEPTABLE,
    );
  }

  async remove(id: number) {
    const checkId = await this.orderRepository.findOne(id);

    if (checkId) {
      await this.orderRepository.delete(id);
      await this.productRepository.update(checkId.product.id, {
        quantity: checkId.product.quantity + checkId.products_quantity,
      });
      return 'Order deletado!';
    }

    throw new HttpException('Order não encontrado', HttpStatus.NOT_FOUND);
  }

  async getCustomer(id: number) {
    try {
      const customer = await this.orderRepository.findOneOrFail({
        where: {
          id: id,
        },
        relations: ['customer'],
      });

      return customer.customer;
    } catch (error) {
      throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
    }
  }

  async getProduct(id: number) {
    try {
      const product = await this.orderRepository.findOne({
        where: {
          id: id,
        },
        relations: ['product'],
      });

      return product.product;
    } catch (error) {
      throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
    }
  }
}
