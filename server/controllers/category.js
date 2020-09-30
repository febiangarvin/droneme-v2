const Category = require('../models/category');
const Product = require('../models/product');
const { errorHandler } = require('../helpers/dbErrorHandler');

// // ----- SEARCH CATEGORY ----- // //
exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        /**
         * apabila category tidak ada
         */
        if (err || !category) {
            return res.status(400).json({
                error: 'Category does not exist'
            });
        }
        req.category = category;
        next();
    });
};

// // ----- CREATE CATEGORY ----- // //
exports.create = (req, res) => {
    /**
     * membuat category baru berdasarkan dari form pada interface
     */
    const category = new Category(req.body);
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

// // ----- READ CATEGORY ----- // //
exports.read = (req, res) => {
    return res.json(req.category);
};

// // ----- UPDATE CATEGORY ----- // //
exports.update = (req, res) => {
    console.log('req.body', req.body);
    console.log('category update param', req.params.categoryId);

    /**
     * mengambil nama category dahulu
     * kemudian melakukan save berdasarkan isian form pada interface
     */
    const category = req.category;
    category.name = req.body.name;
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

// // ----- DELETE CATEGORY ----- // //
exports.remove = (req, res) => {
    const category = req.category;
    Product.find({ category }).exec((err, data) => {
        /**
         * jika masih terdapat sebuah barang dengan category tersebut, maka tidak bisa dihapus
         */
        if (data.length >= 1) {
            return res.status(400).json({
                message: `Sorry. You cant delete ${category.name}. It has ${data.length} associated products.`
            });
        }
        else {
            category.remove((err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                res.json({
                    message: 'Category deleted'
                });
            });
        }
    });
};

// // ----- CATEGORY LISTS ----- // //
exports.list = (req, res) => {
    Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
