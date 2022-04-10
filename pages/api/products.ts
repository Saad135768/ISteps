import type { NextApiRequest, NextApiResponse } from 'next'
import productsData from '../../data.json'

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ name: 'saad' })
}