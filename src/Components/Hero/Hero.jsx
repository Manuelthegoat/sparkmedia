import React from 'react'
import { Herodata } from './Herodata'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
const Hero = ({latest, fetchsingleseries}) => {
	let imgurl = 'https://www.themoviedb.org/t/p/w440_and_h660_face'
  return (
    <div>
      <section className="home home--bg">
	<div className="container">
		<div className="row">
			<div className="col-12">
				<h1 className="home__title"><b>HOT</b> TV SERIES</h1>

				<button className="home__nav home__nav--prev" aria-label="prev card" type="button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/></svg>
				</button>
				<button className="home__nav home__nav--next" aria-label="next card" type="button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>
				</button>
			</div>

			<div className="col-12 big-size">
				<Swiper 
				 modules={[Navigation, Pagination, Scrollbar, A11y]}
				 spaceBetween={50}
				 slidesPerView={4}
				 grabCursor={true}
				 navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
					disabledClass: "swiper-button-disabled"
				  }}
				//  pagination={{ clickable: true }}
				//  scrollbar={{ draggable: true }}
				 onSwiper={(swiper) => console.log(swiper)}
				 onSlideChange={() => console.log('slide change')}
				class="owl-carousel home__carousel">
					{
						latest.slice(0,6).map((item)=>(
							<SwiperSlide className="card card--big">
								<Link to="/singleseries" className="card__cover" onClick={()=>fetchsingleseries(item)}>
									<img src={`${imgurl}${item.poster_path}`} alt="" />
									<span className="card__play">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
									</span>
								</Link>
								<div className="card__content">
									<h3 className="card__title"><a href="">{item.name}</a></h3>
								    <span className="card__category">
										<a href="">{item.first_air_date}</a>
									</span>
									<span className="card__rate">{item.rating}</span>
								</div>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
			<div className="col-12 small-size">
				<Swiper 
				 modules={[Navigation, Pagination, Scrollbar, A11y]}
				 spaceBetween={50}
				 slidesPerView={2}
				 grabCursor={true}
				 navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
					disabledClass: "swiper-button-disabled"
				  }}
				//  pagination={{ clickable: true }}
				//  scrollbar={{ draggable: true }}
				 onSwiper={(swiper) => console.log(swiper)}
				 onSlideChange={() => console.log('slide change')}
				class="owl-carousel home__carousel">
					{
						latest.slice(0,6).map((item)=>(
							<SwiperSlide className="card card--big">
								<a href="" className="card__cover">
									<img src={`${imgurl}${item.poster_path}`} alt="" />
									<span className="card__play">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
									</span>
								</a>
								<div className="card__content">
									<h3 className="card__title"><a href="">{item.name}</a></h3>
								    <span className="card__category">
										<a href="">{item.first_air_date}</a>
									</span>
									<span className="card__rate">{item.rating}</span>
								</div>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Hero
