import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './CustomerReview.css'

const CustomerReview = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    return (
        <section  style={{
            backgroundImage: `
        url(${process.env.PUBLIC_URL + "/images/customer_review_bg.png"})`,
          }} className="customerReviewSection">
            <div className="customerReviewWrapper container">
                <h3>What people say about Cultural Cube</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime blanditiis odio tempore, voluptatibus earum illum minus excepturi doloremque repellat?</p>
            <div className="customerReviewSlider">
            <Slider {...settings}>
          <div className="customerReview">
            <img src="/images/customer_img.png" alt="" />
            <h5>John Doe</h5>
            <h6>Employee, Company name</h6>
            <div className="reviewStar">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore, sunt incidunt praesentium iusto asperiores impedit, quisquam recusandae, est voluptates odio cum exercitationem accusamus nam! Pariatur nisi debitis reiciendis cumque."</p>
          </div>
          <div className="customerReview">
            <img src="/images/customer_img.png" alt="" />
            <h5>John Doe</h5>
            <h6>Employee, Company name</h6>
            <div className="reviewStar">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore, sunt incidunt praesentium iusto asperiores impedit, quisquam recusandae, est voluptates odio cum exercitationem accusamus nam! Pariatur nisi debitis reiciendis cumque."</p>
          </div>
          <div className="customerReview">
            <img src="/images/customer_img.png" alt="" />
            <h5>John Doe</h5>
            <h6>Employee, Company name</h6>
            <div className="reviewStar">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore, sunt incidunt praesentium iusto asperiores impedit, quisquam recusandae, est voluptates odio cum exercitationem accusamus nam! Pariatur nisi debitis reiciendis cumque."</p>
          </div>
        </Slider>
            </div>
            
            </div>
        </section>
    )
}

export default CustomerReview
