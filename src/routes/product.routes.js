const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// ==> Create 'Product': (POST): localhost:3000/api/products
router.post('/products', productController.createProduct);

// ==> Read all 'Products': (GET): localhost:3000/api/products
router.get('/products', productController.listAllProducts);

// ==> Read 'Product' with 'Id': (GET): localhost:3000/api/products/:id
router.get('/products/:id', productController.findProductById);

// ==> Update 'Product' with'Id': (PUT): localhost: 3000/api/products/:id
router.put('/products/:id', productController.updateProductById);

// ==> Delete 'Product' with 'Id': (DELETE): localhost:3000/api/products/:id
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;