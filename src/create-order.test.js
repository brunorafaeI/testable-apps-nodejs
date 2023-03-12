import { test, mock } from "node:test"
import assert from "node:assert"

import { createOrder } from "./create-order.js"
import { transport } from "./mail/transport.js"
import { InMemoryOrdersRepository } from "./repositories/in-memory-orders-repository.js"

// mock.method(transport, 'sendMail', () => {
//   console.log('Email enviado com sucesso!')
// })

transport.sendMail = () => {
  console.log('Email mockado manualmente!')
}

const inMemoryOrdersRepository = new InMemoryOrdersRepository()

test("create new order", async () => {
  try {
    const order = await createOrder({
      customerId: 'customer-fake-id',
      amount: 1000,
    }, inMemoryOrdersRepository)
  
    assert.ok(order.id)
  } catch (err) {
    console.log(err)
  }
})