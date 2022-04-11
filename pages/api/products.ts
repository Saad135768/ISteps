import type { NextApiRequest, NextApiResponse } from 'next'
import productsData from '../../data.json'

// eslint-disable-next-line import/no-anonymous-default-export
export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ name: 'saad' })
}