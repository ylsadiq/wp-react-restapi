import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { CiHeart } from "react-icons/ci";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
const BestSeller = ({title, products}) => {
  return (
    <section class="product_list section_padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="section_tittle text-center">
              <h2>
              {title} <span>shop</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="product_list_slider owl-carousel">
              <div class="single_product_list_slider">
                <div class="row align-items-center justify-content-between">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={true}
                    navigation={{
                      true: true,
                      nextEl: ".product-next",
                      prevEl: ".product-prev",
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {products.map((product, index) => (
                      <SwiperSlide key={index}>
                        <div className="single_product_item">
                          <img src={product.image} alt={product.name} />
                          <div className="single_product_text">
                            <h4>{product.name}</h4>
                            <h3>{product.price}</h3>
                            <a href={product.link} className="add_cart">
                              + add to cart
                              <CiHeart />
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div class="single_product_list_slider">
                <div class="row align-items-center justify-content-between">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    className="mySwiper"
                  >
                    {products.map((product, index) => (
                      <SwiperSlide key={index}>
                        <div className="single_product_item">
                          <img src={product.image} alt={product.name} />
                          <div className="single_product_text">
                            <h4>{product.name}</h4>
                            <h3>{product.price}</h3>
                            <a href={product.link} className="add_cart">
                              + add to cart
                              <CiHeart />
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-navigation">
          <button className="product-prev">previous</button>
          <button className="product-next">next</button>
        </div>
      </div>
    </section>
  )
}

export default BestSeller