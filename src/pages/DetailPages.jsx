import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { product } from '../assets/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export default function DetailPages() {
  return (
    <>
      <Navbar />
      <div className="detailpages">
        <div className="container">
          <div className="row">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink>Home</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <NavLink>Detail</NavLink>
                </li>
              </ol>
            </nav>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="card p-0" style={{ border: 'none' }}>
                <img src="/images/pic2.png" alt="" />
                <Swiper
                  slidesPerView={1}
                  centeredSlides={false}
                  slidesPerGroupSkip={1}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    430: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1200: {
                      spaceBetween: 20,
                      slidesPerView: 4,
                    },
                  }}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="/images/pic2.png" alt="" width={'100%'} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/pic2.png" alt="" width={'100%'} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/pic2.png" alt="" width={'100%'} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/pic2.png" alt="" width={'100%'} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/pic2.png" alt="" width={'100%'} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <h3>Bollam Owl</h3>
                <h4>$50.00</h4>
                <p>Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the...</p>
                <span>Quantity</span>
                <div className="quantity">
                  <div className="input-quantity">
                    <div className="min">
                      <FaMinus />
                    </div>
                    <input type="number" placeholder="0" />
                    <div className="plus">
                      <FaPlus />
                    </div>
                  </div>
                  <button style={{ padding: '7px 15px', borderRadius: '5px', color: '#fff', backgroundColor: '#000', border: 'none', fontWeight: '500', width: '100%' }}>Add to Cart</button>
                </div>
                <button style={{ padding: '7px 15px', borderRadius: '5px', color: '#fff', backgroundColor: '#00af91', border: 'none', fontWeight: '500' }}>Buy Now</button>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <h4 style={{ fontSize: '24px' }}>Other Product</h4>
          </div>
          <div className="row mt-2">
            {product.slice(0, 4).map((p) => (
              <div className="col-md-4 col-xl-3 col-6 mb-4" key={p.id}>
                <div className="card">
                  <img src={p.img} alt="" />
                  <div className="info-icons">
                    <div className="icons">
                      <img src="/images/heart.svg" alt="" />
                    </div>
                    <div className="icons">
                      <img src="/images/bag-happy.svg" alt="" />
                    </div>
                  </div>
                  <div className="desc">
                    <span>{p.user}</span>
                    <h5>{p.title}</h5>
                    <div className="price">${p.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
