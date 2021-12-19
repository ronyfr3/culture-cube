import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import Header from "../components/Header";
import RelatedProduct from '../components/RelatedProduct'
import { addToCart } from "../actions/cartActions";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./ProductScreen.css";

const ProductScreen = ({ match }) => {
  // const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.productsReducer);
  // const category = match.params.category;

  // const categoryArray = products.filter(
  //   (product) => product.category.toLowerCase() === category
  // );

  // const addToCartHandler = (id, qty) => {
  //   dispatch(addToCart(id, qty));
  // };

  const settings = {
    dots: true,
    // arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  const data = [
    {
      id: "1",
      tabTitle: (
        <button className="landscape">
                <img src="/icons/landscape.png" alt="" />
              </button>
      ),
      tabContent: (
        <div className="landscapeSection">
          <div className="landscapeWrapper">
            <div className="landscapeContent">
              <div className="landscapeContentLeft">
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, suscipit.</h4>
                <h3>$23</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, pariatur. Sequi, ex! Molestiae atque illum veniam facere, dolorum necessitatibus cupiditate.</p>
                <div className="reviewStar">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <div className="countInStock">
                  <span>In stock</span>
                </div>
                <div className="landscapeButtons">
                <button className="buyBtn">Buy now</button>
                <button className="cartBtn">Add to cart</button>
                <button className="wishlistBtn"><img src="/icons/wishlist.png" alt="" /> <span>37.5 K</span></button>
              </div>
              </div>
              <div className="landscapeContentRight">
              <Slider >
                    {/* {product?.productInfo?.image?.map(image => (
                    <div>
                      <img src={image} alt="" />
                    </div>
                  ))} */}
                    <div>
                      <img src="/images/product_details_1.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/product_details_1.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/product_details_1.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/product_details_1.png" alt="" />
                    </div>
                  </Slider>
              </div>
            </div>
            <div className="landscapeContent">
              <div className="landscapeContentLeft">
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, suscipit.</h4>
                <h3>$23</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, pariatur. Sequi, ex! Molestiae atque illum veniam facere, dolorum necessitatibus cupiditate.</p>
                <div className="reviewStar">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <div className="countInStock">
                  <span>In stock</span>
                </div>
                <div className="landscapeButtons">
                <button className="buyBtn">Buy now</button>
                <button className="cartBtn">Add to cart</button>
                <button className="wishlistBtn"><img src="/icons/wishlist.png" alt="" /> <span>37.5 K</span></button>
              </div>
              </div>
              <div className="landscapeContentRight">
              <Slider >
                    {/* {product?.productInfo?.image?.map(image => (
                    <div>
                      <img src={image} alt="" />
                    </div>
                  ))} */}
                    <div>
                      <img src="/images/product_details_1.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/product_details_1.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/product_details_1.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/product_details_1.png" alt="" />
                    </div>
                  </Slider>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "2",
      tabTitle: (
        <button className="grid">
                <img src="/icons/grid.png" alt="" />
              </button>
      ),
      tabContent: (
        <RelatedProduct />
      ),
    },
  ]

  const [visibleTab, setVisibleTab] = React.useState(data[0].id)

  const listTitles = data.map((item) => (
    <div
      onClick={() => setVisibleTab(item.id)}
      classNameName={
        visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"
      }
    >
      {item.tabTitle}
    </div>
  ))

  const listContent = data.map((item) => (
    <p style={visibleTab === item.id ? {} : { display: "none" }}>
      {item.tabContent}
    </p>
  ))

  return (
    <>
      <Header />
      <section
        className="productBannerSection"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/product_bg.png"
          })`,
        }}
      >
        <div className="productBannerWrapper container">
          <div className="productBannerContent">
            <div>
              <h1>Top Wears</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, corporis nisi. Obcaecati alias ducimus ullam animi a, provident perferendis omnis!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="productSection">
        <div className="productWrapper container">
          <div className="optionButtonsAndGrid">
            <div className="optionButtons">
              <button className="titleBtn">Title</button>
              <button className="conditionBtn">Condition</button>
              <button className="deliveryBtn">Delivery options</button>
            </div>
              <div className="grid">
              {listTitles}
              </div>
          </div>
          <div className="productContent">
            <div className="totalSortItems">
              <div className="total">
                <p>
                  Total: <span>12,555 items</span>
                </p>
              </div>
              <div className="sortItemsForms">
                <form className="sortByForm">
                  <label htmlFor="">Sort by:</label>
                  <select name="" id="">
                    <option value="">In Stock</option>
                    <option value="">Out Of Stock</option>
                    <option value="">New Arrivals</option>
                    <option value="">Best Sellings</option>
                  </select>
                </form>
                <form className="itemsForm">
                  <label htmlFor="">Items:</label>
                  <select name="" id="">
                    <option value="">10 Per Page</option>
                    <option value="">20 Per Page</option>
                    <option value="">30 Per Page</option>
                    <option value="">40 Per Page</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="product">
              <div className="productLeftContent">
                <form className="availabilityForm">
                  <h5>AVAILABILITY</h5>
                  <div>
                    <input type="checkbox" id="in-stock" name="" value="" />
                    <label htmlFor="in-stock"> IN STOCK</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="out-of-stock" name="" value="" />
                    <label htmlFor="out-of-stock"> OUT OF STOCK</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="arrivals" name="" value="" />
                    <label htmlFor="arrivals"> NEW ARRIVALS</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="sellings" name="" value="" />
                    <label htmlFor="sellings"> BEST SELLINGS</label>
                    <br />
                  </div>
                </form>
                {/* <form className="product-type-form" action="">
                  <h5>PRODUCT TYPE</h5>
                  <div>
                    <input type="checkbox" id="all" name="" value="" />
                    <label htmlFor="all"> ALL</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="automatic" name="" value="" />
                    <label htmlFor="automatic"> AUTOMATIC</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="manual" name="" value="" />
                    <label htmlFor="manual"> MANUAL</label>
                    <br />
                  </div>
                </form> */}
                {/* <form className="calliber-form" action="">
                  <h5>CALLIBER</h5>
                  <div>
                    <input type="checkbox" id="calliber1" name="" value="" />
                    <label htmlFor="calliber1"> 7.56 MM</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="calliber2" name="" value="" />
                    <label htmlFor="calliber2"> 5.56 MM</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="calliber3" name="" value="" />
                    <label htmlFor="calliber3"> 9 MM</label>
                    <br />
                  </div>
                </form> */}
              </div>
              <div className="product-right-content">
                {listContent}
                {/* {categoryArray.map((c) => (
                  <div className="product-and-review">
                    <div className="product-review-stock">
                      <h3>{c.name}</h3>
                      <h5>Cal: 7.56MM</h5>
                      <p>$ 100 AUD</p>
                      <div className="review-stock">
                        <div className="review">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="stock">
                          {c.countInStock === 0 ? (
                            <p style={{ color: "#F54748" }}>Out of Stock</p>
                          ) : (
                            <p>In stock</p>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => addToCartHandler(c._id, 1)}
                        className="btn"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div classNameName="product-slider">
                      <Slider {...settings}>
                        <div>
                          <img src={c.image} alt="Product" />
                        </div>
                        <div>
                          <img src={c.image} alt="Product" />
                        </div>
                        <div>
                          <img src={c.image} alt="Product" />
                        </div>
                      </Slider>
                    </div>
                  </div>
                ))} */}

                <div className="pagination">
                  <div className="previous">
                    <button>Previous</button>
                  </div>
                  <ul className="number">
                    <li className="p-active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                  </ul>
                  <div className="next">
                    <button>Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductScreen;
