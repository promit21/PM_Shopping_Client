import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Image Source
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-full h-[550px]" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[550px]" src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[550px]" src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[550px]" src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[550px]" src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[550px]" src={img6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Products Section */}
      <div>
        
      </div>
    </>
  );
};

export default Home;
