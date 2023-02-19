import React from 'react'

const Anime = ({response}) => {
  return (
    <div>
      <section class="section section--first section--bg" data-bg="img/section/section.jpg">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section__wrap">
					<h1 class="section__title">Anime</h1>
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
            {response.map((item)=>(
                 <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                 <div className="card">
                     <a href="" className="card__cover">
                         <img src={item.animeImg} alt="" />
                         <span className="card__play">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
                         </span>
                     </a>
                     <div className="card__content">
                         <h3 className="card__title"><a href="">{item.animeTitle}</a></h3>
                         <span className="card__category">
                             <a href="">{item.subOrDub}</a>
                         </span>
                         <span className="card__rate">{item.releasedDate}</span>
                     </div>
                 </div>
             </div>
            ))}
        </div>
    </div>
</div>
    </div>
  )
}

export default Anime
