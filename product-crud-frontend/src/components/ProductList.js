import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './ProductList.css'; // ✅ Import the CSS

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/products');
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await axios.delete(`http://localhost:5000/products/${id}`);
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <Link to="/add">➕ Add New Product</Link>
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <img className="product-image" src={product.imageurl} alt={product.title} />
          <div className="product-content">
            <div className="product-title">{product.title}</div>
            <div className="product-description">{product.description}</div>
          </div>
          <div className="product-actions">
            <span onClick={() => navigate(`/edit/${product._id}`)}>✏️</span>
            <span onClick={() => handleDelete(product._id)}>🗑️</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
