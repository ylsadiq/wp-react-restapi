import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg from "../../Assets/images/banner_img.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <section class="banner_part">
      <div class="container">
        <div class="banner_slider">
          <Swiper
            pagination={{
              type: "fraction",
              el: ".custom-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div class="single_banner_slider">
                <div class="banner_text">
                  <div class="banner_text_iner">
                    <h1>Wood & Cloth Sofa</h1>
                    <p>
                      Incididunt ut labore et dolore magna aliqua quis ipsum
                      suspendisse ultrices gravida. Risus commodo viverra
                    </p>
                    <a href="#" class="btn_2">
                      buy now
                    </a>
                  </div>
                </div>
                <div class="banner_img">
                  <img src={bannerImg} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="single_banner_slider">
                <div class="banner_text">
                  <div class="banner_text_iner">
                    <h1>Wood & Cloth Sofa</h1>
                    <p>
                      Incididunt ut labore et dolore magna aliqua quis ipsum
                      suspendisse ultrices gravida. Risus commodo viverra
                    </p>
                    <a href="#" class="btn_2">
                      buy now
                    </a>
                  </div>
                </div>
                <div class="banner_img">
                  <img src={bannerImg} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="single_banner_slider">
                <div class="banner_text">
                  <div class="banner_text_iner">
                    <h1>Wood & Cloth Sofa</h1>
                    <p>
                      Incididunt ut labore et dolore magna aliqua quis ipsum
                      suspendisse ultrices gravida. Risus commodo viverra
                    </p>
                    <a href="#" class="btn_2">
                      buy now
                    </a>
                  </div>
                </div>
                <div class="banner_img">
                  <img src={bannerImg} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Custom Navigation Buttons */}
        <div className="custom-navigation">
          <button className="custom-prev">previous</button>
          <button className="custom-next">next</button>
        </div>
        <div className="custom-pagination"></div>
      </div>
    </section>
  );
};

export default Banner;
