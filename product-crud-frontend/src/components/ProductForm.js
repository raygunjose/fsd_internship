import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductForm.css'; // ✅ Import the CSS here

function ProductForm() {
  const [product, setProduct] = useState({ title: '', description: '', imageurl: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/products/${id}`).then((res) => {
        setProduct(res.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:5000/products/${id}`, product).then(() => navigate('/'));
    } else {
      axios.post('http://localhost:5000/products', product).then(() => navigate('/'));
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>{id ? 'Update' : 'Add'} Product</h2>
      <input name="title" value={product.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
      <input name="imageurl" value={product.imageurl} onChange={handleChange} placeholder="Image URL" required />
      <button type="submit">{id ? 'Update' : 'Add'} Product</button>
    </form>
  );
}

export default ProductForm;
