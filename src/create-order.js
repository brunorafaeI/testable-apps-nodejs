import { transport } from './mail/transport.js'

export async function createOrder(data, ordersRepository) {
  const { customerId, amount } = data
  const isPriority = amount > 3000
 
  const order = await ordersRepository.create({
    customerId,
    isPriority,
    amount
  })

  const amountFormatted = new Intl.NumberFormat("en-US", { 
    style: "currency", 
    currency: "USD" }
  ).format(amount)

  await transport.sendMail({
    from: {
      name: 'Node testable',
      address: 'no-reply@node-testable.com',
    },
    to: {
      name: 'Bruno Rafael',
      address: 'brunorafaelap@gmail.com',
    },
    subject: `New order #${order.id}`,
    html: `<h2>New order created:</h2><br /><strong>orderId:</strong> ${order.id}<br /> <strong>amount:</strong> ${amountFormatted}<br />`
  })

  return order
}