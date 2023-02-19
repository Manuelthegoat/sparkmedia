import React from 'react'
import { moviedata } from '../Movies/Moviedata'

const Premiere = ({trending}) => {
    let imgurl = 'https://www.themoviedb.org/t/p/w440_and_h660_face'

  return (
    <div>
      <section className="section section--bg" data-bg="img/section/section.jpg">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h2 className="section__title">Trending this week</h2>
                  </div>
              </div>
              <div className="row row--grid">
                 {
                     trending.slice(0,6).map((item)=>(
                         <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                             <div className="card">
                                 <a href="" className="card__cover">
                                     <img src={`${imgurl}${item.poster_path}`} alt="" />
                                     <span className="card__play">
							            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
						             </span>
                                 </a>
                                 <div className="card__content">
                                     <h3 className="card__title">{item.id}</h3>
                                     <h3 className="card__title"><a href="">{item.title}{item.name}</a></h3>
                                     <span className="card__category">
                                         <a href="">{item.category}</a>
                                     </span>
                                     <span className="card__rate">{item.rating}</span>
                                 </div>
                             </div>
                         </div>
                     ))
                 }
                 <div className="col-12">
                     <a href="" className="section__btn">Show More</a>
                 </div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Premiere
