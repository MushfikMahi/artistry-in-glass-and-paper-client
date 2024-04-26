// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero md:h-[600px] h-[400px]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/shiny-textured-background_53876-95197.jpg?t=st=1714100017~exp=1714103617~hmac=daef6a87bfbddf95bd5ecde314bbc1f4e2c9d958ec8038c77427fda967e7623f&w=1380)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="md:px-20 px-10 text-white">
                <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
                Discover the Magic of Glass Art
                </h1>
                <p className="mb-5 text-sm md:text-base">
                Immerse yourself in the world of glass artistry. Explore stunning creations crafted with precision and passion.
                </p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero md:h-[600px] h-[400px]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/colorful-floral-spring-wallpaper_23-2150270695.jpg?t=st=1714100517~exp=1714104117~hmac=64beb9e086ddf358940b2150b89a01aba13bf61e10451efec69b9398405af6e8&w=996)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="md:px-20 px-10 text-white">
                <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
                Unleash Your Creativity with Paper Crafts
                </h1>
                <p className="mb-5 text-sm md:text-base">
                Experience the beauty of paper crafts. Let your imagination soar as you create intricate designs and delicate masterpieces.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero md:h-[600px] h-[400px]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/flat-design-innovation-concept_23-2149155593.jpg?t=st=1714100585~exp=1714104185~hmac=34eb419e2b4bd7be6458aba060135af6b710e8ac6c31b9d1383e02d8ec8eb3d6&w=996)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="md:px-20 px-10 text-white">
                <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
                Craftsmanship Meets Innovation
                </h1>
                <p className="mb-5 text-sm md:text-base">
                Witness the fusion of traditional craftsmanship and modern innovation. Explore unique creations that push the boundaries of creativity.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
