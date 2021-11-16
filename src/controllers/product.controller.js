const db = require('../config/database');

// Method responsible for creating a product and inserting into database
exports.createProduct = async (req, res) =>{
    const { productname, quantity, price } = req.body;
    const { rows } = await db.query(
        "INSERT INTO products (productname, quantity, price) VALUES ($1, $2, $3)",
        [productname, quantity, price]
    );
    res.status(201).send({
        message: "Product added successfully!",
        body: {
            product: {productname, quantity, price}
        },
    });
};

// Method responsible for listing all products
exports.listAllProducts = async (req, res) => {
  const response = await db.query('SELECT * FROM products ORDER BY productname ASC');
  res.status(200).send(response.rows);
};

// ==> Method responsible for selecting 'Product' with 'Id':
exports.findProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM products WHERE productid = $1', [productId]);
  res.status(200).send(response.rows);
}

// ==> Method responsible for updating 'Product' with 'Id':
exports.updateProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const { productname, quantity, price } = req.body;

  const response = await db.query(
    "UPDATE products SET productname = $1, quantity = $2, price = $3 WHERE productId = $4",
    [productname, quantity, price, productId]
  );

  res.status(200).send({ message: "Product Updated Successfully!" });
};

// ==> Method responsible for deleting 'Product' with 'Id':
exports.deleteProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  await db.query('DELETE FROM products WHERE productId = $1', [
    productId
  ]);

  res.status(200).send({ message: 'Product deleted successfully!', productId });
};