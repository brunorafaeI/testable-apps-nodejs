import { randomUUID } from 'node:crypto'
import { client } from "../database/client.js"

export class OrdersRepository {
    async create (data) {
        const { customerId, isPriority, amount } = data

        const command = await client.query(/* SQL */`
            INSERT INTO "orders" (id, customer_id, priority, amount)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `, [
            randomUUID(),
            customerId,
            isPriority,
            amount,
        ])

        return command?.rows[0]
    }
}