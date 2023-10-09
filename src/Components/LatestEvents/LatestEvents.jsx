// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Countdown from './Countdown';


const LatestEvents = () => {

  const {images}=useContext(AuthContext)

// console.log(images)
  return (
    <div className='text-center mt-10 lg:h-screen'>
      <div className="" data-aos="fade-right">
        <p className="">UPCOMING EVENTS</p>
      <h1 className="text-4xl">
        Latest <span className="font-bold ">Awesome Events</span>
      </h1>
      </div>
      
      <div className="">
        <Countdown></Countdown>
      </div>
      <div className="">
      <Swiper navigation={true}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 3000, // Delay in milliseconds between slides
          disableOnInteraction: true, // Allows user interaction to pause autoplay
        }}
        speed={800}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 30
          }}
        }
        modules={[FreeMode, Pagination,Navigation]}
        className="mySwiper my-5 max-w-7xl mx-auto  "
      >
        
      {
        images.map(image=>
        <>
          <SwiperSlide className='relative '>
            <img src={image.image} className='' alt="" />
            <h1 className="absolute bottom-14 right-0 left-0 font-bold text-xl text-center z-10">{image.category}</h1>
          </SwiperSlide> 
          
        </>)
      }
      
      </Swiper>

   
      </div>
    </div>
  );
};

export default LatestEvents;

{/* <SwiperSlide>Slide 2</SwiperSlide>
<SwiperSlide>Slide 3</SwiperSlide>
<SwiperSlide>Slide 4</SwiperSlide>
<SwiperSlide>Slide 5</SwiperSlide>
<SwiperSlide>Slide 6</SwiperSlide>
<SwiperSlide>Slide 7</SwiperSlide>
<SwiperSlide>Slide 8</SwiperSlide>
<SwiperSlide>Slide 9</SwiperSlide> */}