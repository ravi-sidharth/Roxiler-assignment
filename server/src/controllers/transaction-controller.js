const Product = require('../models/product/product-model')

const allTransaction = async (req, res) => {
    try {
        const { month, search, page = 1, perPage = 10 } = req.query
        const monthNumber = parseInt(month)
        const skip = (page - 1) * perPage
        const limit = perPage

        const query ={}

        query.$expr = {
            $eq: [
                { $month: "$dateOfSale" },
                monthNumber
            ]
        }

        if (search) {
            query.$text = {
                $search:search
            }
        }

        const transactions = await Product.find(query).skip(skip).limit(limit) 
        const totalTransaction =transactions.length

        res.status(200).json({
            success: true,
            message:"Successfully fetch all product transactions",
            transactions,
            totalTransaction,
            page: parseInt(page),
            perPage: parseInt(perPage)

        })

    } catch (e) {
        console.log('Error occured while fetching transactions', e)
        res.status(500).json({
            success: false,
            message: "Error occured while fetching transactions"
        })
    }
}

module.exports = allTransaction