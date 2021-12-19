// import './ProductCreateScreen.css';
import axios from 'axios';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import AdminSidebar from '../components/AdminSidebar'
import AdminNavbar from '../components/AdminNavbar'
import './AdminProductUpdateScreen.css'

const AdminProductUpdateScreen = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    brand: '',
    price: '',
    image: '',
    description: '',
    countInStock: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  console.log(product);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/products', product)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert('product added')
  };

  return (
    <section className='productCreateScreen'>
      <AdminSidebar />
      <div className='productCreateRight'>
        <AdminNavbar />
        <div className='addProduct'>
          <div>
            <h4>Edit Product</h4>
          </div>
        </div>
        <form className='productCreateForm'>
          <h6>Product info</h6>
          <p>Product name</p>
          <input type="text" placeholder="" />
          <p>Category</p>
          <input type="text" placeholder="" />
          <p>Sub category</p>
          <input type="text" placeholder="" />
          <p>Brand</p>
          <input type="text" placeholder="" />
          <p>Description one</p>
          <textarea name="" id="" cols="30" rows="10">Type here...</textarea>
          <p>Count in stock</p>
          <input type="text" placeholder=""/>
          <p>Price</p>
          <input type="text" placeholder=""/>
          <p>Image one</p>
          <input type="file" />
          <p>Image two</p>
          <input type="file" />
          <p>Image three</p>
          <input type="file" />
          <h6>specification</h6>
          <div className="specification">
            <div>
              <p>Specification Type</p>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            <div>
            <p>Value one</p>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            <div>
            <p>Value two</p>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
          <p>Description two</p>
          <textarea name="" id="" cols="30" rows="10">Type here...</textarea>
          <button className="btn publishBtn">Save & publish</button>
        </form>
      </div>
    </section>
  );
};

export default AdminProductUpdateScreen;
