// import './ProductCreateScreen.css';
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FileBase64 from "react-file-base64";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "./AdminProductCreateScreen.css";

const AdminProductCreateScreen = () => {
  const [tags1, setTags1] = useState([])
  const [tags2, setTags2] = useState([])
  const [tags3, setTags3] = useState([])

  const [product, setProduct] = useState({
    category: "",
    subcategory: "",
    brand: "",
    title: "",
    price: "",
    shortdescription: "",
    longdescription: "",
    countinstock: "",
    image1: "",
    image2: "",
    image3: "",
    // name: [],
    // values1: [],
    // values2: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const productObj = {
    user: "61765a978ad5752627b851b5",
    category: product.category,
    subcategory: product.subcategory,
    brand: product.brand,
    productInfo: {
      info: {
        name: tags1,
        values1: tags2,
        values2: tags3,
      },
      title: product.title,
      price: product.price,
      shortdescription: product.shortdescription,
      longdescription: product.longdescription,
      image: [product.image1, product.image2, product.image3],
    },
  };

  let tagInput;
  const removeTag1 = (i) => {
    // [...tags1].splice(i, 1);
    // Call the defined function setTags which will replace tags with the new value.
    setTags1([...tags1].splice(i, 1));
  };

  const removeTag2 = (i) => {
    const newTags2 = [...tags2];
    newTags2.splice(i, 1);
    // Call the defined function setTags which will replace tags with the new value.
    setTags2(newTags2);
  };

  const removeTag3 = (i) => {
    const newTags3 = [...tags3];
    newTags3.splice(i, 1);
    // Call the defined function setTags which will replace tags with the new value.
    setTags3(newTags3);
  };

  const inputKeyDown1 = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (tags1.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags1([...tags1, val]);
      tagInput.value = null;
    } else if (e.key === "Backspace" && !val) {
      removeTag1(tags1.length - 1);
    }
  };

  const inputKeyDown2 = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (tags2.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags2([...tags2, val]);
      tagInput.value = null;
    } else if (e.key === "Backspace" && !val) {
      removeTag2(tags2.length - 1);
    }
  };

  const inputKeyDown3 = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (tags3.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags3([...tags3, val]);
      tagInput.value = null;
    } else if (e.key === "Backspace" && !val) {
      removeTag3(tags3.length - 1);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/products", productObj)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="productCreateScreen">
      <AdminSidebar />
      <div className="productCreateRight">
        <AdminNavbar />
        <div className="addProduct">
          <div>
            <h4>Add New Product</h4>
          </div>
        </div>
        <form onSubmit={submitHandler} className="productCreateForm">
          <h6>Product info</h6>
          <p>Product name</p>
          <input
            name="title"
            value={product.title}
            onChange={handleChange}
            type="text"
            placeholder=""
          />
          <p>Category</p>
          <input
            name="category"
            value={product.categoy}
            onChange={handleChange}
            type="text"
            placeholder=""
          />
          <p>Sub category</p>
          <input
            name="subcategory"
            value={product.subcategory}
            onChange={handleChange}
            type="text"
            placeholder=""
          />
          <p>Brand</p>
          <input
            name="brand"
            value={product.brand}
            onChange={handleChange}
            type="text"
            placeholder=""
          />
          <p>Description one</p>
          <textarea
            name="shortdescription"
            value={product.shortdescription}
            onChange={handleChange}
            id=""
            cols="30"
            rows="10"
          >
            Type here...
          </textarea>
          <p>Count in stock</p>
          <input
            name="countinstock"
            value={product.countinstock}
            onChange={handleChange}
            type="text"
            placeholder=""
          />
          <p>Price</p>
          <input
            name="image"
            value={product.image}
            onChange={handleChange}
            type="text"
            placeholder=""
          />
          <p>Image one</p>
          <input
            name="image1"
            value={product.image1}
            onChange={handleChange}
            type="file"
          />
          <p>Image two</p>
          <input
            name="image2"
            value={product.image2}
            onChange={handleChange}
            type="file"
          />
          <p>Image three</p>
          <input
            name="image3"
            value={product.image3}
            onChange={handleChange}
            type="file"
          />
          <h6>specification</h6>
          <div className="specification">
            <div>

              <p>Specification Type</p>
              <div className="input-tag">
                <ul className="input-tag__tags">
                  {tags1.map((tag, i) => (
                    <li key={tag}>
                      {tag}
                      <button
                        type="button"
                        onClick={() => {
                          removeTag1(i);
                        }}
                      >
                        +
                      </button>
                    </li>
                  ))}
                  <li className="input-tag_tags_input">
                    <input
                      type="text"
                      onKeyDown={inputKeyDown1}
                      ref={(c) => {
                        tagInput = c;
                      }}
                    />
                  </li>
                </ul>
              </div>

            </div>
            <div>

              <p>Value one</p>
              <div className="input-tag">
                <ul className="input-tag__tags">
                  {tags2.map((tag, i) => (
                    <li key={tag}>
                      {tag}
                      <button
                        type="button"
                        onClick={() => {
                          removeTag2(i);
                        }}
                      >
                        +
                      </button>
                    </li>
                  ))}
                  <li className="input-tag_tags_input">
                    <input
                      type="text"
                      onKeyDown={inputKeyDown2}
                      ref={(c) => {
                        tagInput = c;
                      }}
                    />
                  </li>
                </ul>
              </div>

            </div>
            <div>

              <p>Value two</p>
              <div className="input-tag">
                <ul className="input-tag__tags">
                  {tags3.map((tag, i) => (
                    <li key={tag}>
                      {tag}
                      <button
                        type="button"
                        onClick={() => {
                          removeTag3(i);
                        }}
                      >
                        +
                      </button>
                    </li>
                  ))}
                  <li className="input-tag_tags_input">
                    <input
                      type="text"
                      onKeyDown={inputKeyDown3}
                      ref={(c) => {
                        tagInput = c;
                      }}
                    />
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <p>Description two</p>
          <textarea
            name="longdescription"
            value={product.longdescription}
            onChange={handleChange}
            id=""
            cols="30"
            rows="10"
          >
            Type here...
          </textarea>
          <button className="btn publishBtn">Save & publish</button>
        </form>
      </div>
    </section>
  );
};

export default AdminProductCreateScreen;
