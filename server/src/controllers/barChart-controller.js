const Product = require('../models/product/product-model')

const fetchPriceRangeItems = async (req, res) => {
    try {
        const { month } = req.query
        const monthNumber = parseInt(month)

        const priceRange = [
            {min:0 , max:100},
            {min:101 , max:200},
            {min:201 , max:300},
            {min:301 , max:400},
            {min:401 , max:500},
            {min:501 , max:600},
            {min:601 , max:700},
            {min:701 , max:800},
            {min:801 , max:900},
            {min:901 , max:infinity},
        ]
        
        const barChartData = await Product.countDocuments([
            {
                $match: {
                    $expr: {
                        $eq: [
                            { $month: "$dateOfSale" },
                            monthNumber
                        ]
                    }
                }
            },
            {
                price: {}
            }
        ])

        res.status(200).json({
            success:true,
            message:"Successfully fetched all items respective of price"
        })
    } catch (e) {
        console.log("Error occured while fetching price range items", e)
        res.status(500).json({
            success: false,
            message: "Error occured while fetching price range items"
        })
    }
}

module.exports = fetchPriceRangeItems