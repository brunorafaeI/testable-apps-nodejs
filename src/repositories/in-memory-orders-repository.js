import { randomUUID } from 'node:crypto'

export class InMemoryOrdersRepository {
  #orders = []

  async create (data) {
    const { customerId, isPriority, amount } = data

    const createdOrder = {
      id: randomUUID(),
      customer_id: customerId, 
      priority: isPriority, 
      amount
    }

    this.#orders.push(createdOrder)

    return createdOrder
  }

  get orders() {
    return this.#orders
  }
}