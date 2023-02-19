import React from 'react'
import Premiere from '../Components/Premiere/Premiere'

const AllMovies = ({movie}) => {
    let imgurl = 'https://www.themoviedb.org/t/p/w440_and_h660_face'
  return (
    <div>
    <section class="section section--first section--bg" data-bg="img/section/section.jpg">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section__wrap">
					<h1 class="section__title">All Movies</h1>
					<ul class="breadcrumb">
						<li class="breadcrumb__item"><a href="index.html">Home</a></li>
						<li class="breadcrumb__item breadcrumb__item--active">Catalog grid</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<div className="catalog">
    <div className="container">
        <div className="row row--grid">
            {
                movie.map((item)=>(
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card">
                            <a href="" className="card__cover">
                                <img src={`${imgurl}${item.poster_path}`} alt="" />
                                <span className="card__play">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
                                </span>
                            </a>
                            <div className="card__content">
                                <h3 className="card__title"><a href="">{item.title}</a></h3>
                                <span className="card__category">
                                    <a href="">{item.release_date}</a>
                                </span>
                                <span className="card__rate">{item.vote_average}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
            <div className="row">
                <div className="col-12">
                    <ul className="paginator">
                    <li className="paginator__item paginator__item--prev">
						<a href="#"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z"/></svg></a>
					</li>
					<li className="paginator__item"><a href="#">1</a></li>
					<li className="paginator__item paginator__item--active"><a href="#">2</a></li>
					<li className="paginator__item"><a href="#">3</a></li>
					<li className="paginator__item"><a href="#">4</a></li>
					<li className="paginator__item paginator__item--next">
						<a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"/></svg></a>
					</li>
                    </ul>
                </div>
            </div>
    </div>
</div>
<section className="section section--bg" data-bg="img/section/section.jpg">
    {/* <Premiere/> */}
</section>
    </div>
  )
}

export default AllMovies
