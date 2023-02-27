import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({search, searchanime, searchseries, fetchDetails, fetchsingleseries}) => {
    let imgurl = 'https://www.themoviedb.org/t/p/w440_and_h660_face'
  return (
    <div>
        <section className="content">
        <div className="container">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active">
              <div className="row row--grid">
              {
               searchanime.slice(0,6).map((item)=>(
                 <div className="col-6 col-sm-12 col-lg-6">
                   <div className="card card--list">
                     <a href="" className="card__cover">
                       <img src={item.animeImg} alt="" />
                       <span className="card__play">
								        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
							         </span>
                     </a>
                     <div className="card__content">
                       <h3 className="card__title"><a href="">{item.animeTitle}</a></h3>
                       <span className="card__category">
                         <a href="">{item.status}</a>
                       </span>
                       <div className="card__wrap">
                         <span className="card__rate">{item.status}</span>
                         <ul className="card__list">
                           <li className='caps'>JPN</li>
                           <li>{item.vote_count}</li>
                         </ul>
                       </div>
                       <div className="card__description">
                         <p>{item.overview}</p>
                       </div>
                     </div>
                   </div>
                 </div>
               ))
             }
             {
               search.map((item)=>(
                 <div className="col-6 col-sm-12 col-lg-6">
                   <div className="card card--list">
                     <Link to='/single' className="card__cover" onClick={()=>fetchDetails(item)}>
                       <img src={`${imgurl}${item.poster_path}`} alt="" />
                       <span className="card__play">
								        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
							         </span>
                     </Link>
                     <div className="card__content">
                       <h3 className="card__title"><a href="">{item.title}</a></h3>
                       <span className="card__category">
                         <a href="">{item.release_date}</a>
                       </span>
                       <div className="card__wrap">
                         <span className="card__rate">{item.vote_average}</span>
                         <ul className="card__list">
                           <li className='caps'>{item.original_language}</li>
                           <li>{item.vote_count}</li>
                         </ul>
                       </div>
                       <div className="card__description">
                         <p>{item.overview}</p>
                       </div>
                     </div>
                   </div>
                 </div>
               ))
             }

{
               searchseries.map((item)=>(
                 <div className="col-6 col-sm-12 col-lg-6">
                   <div className="card card--list">
                     <Link to='/singleseries'  className="card__cover" onClick={()=>fetchsingleseries(item)}>
                       <img src={`${imgurl}${item.poster_path}`} alt=""  />
                       <span className="card__play">
								        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
							         </span>
                     </Link>
                     <div className="card__content">
                       <h3 className="card__title"><a href="">{item.title}{item.name}</a></h3>
                       <span className="card__category">
                         <a href="">{item.release_date}</a>
                       </span>
                       <div className="card__wrap">
                         <span className="card__rate">{item.vote_average}</span>
                         <ul className="card__list">
                           <li className='caps'>{item.original_language}</li>
                           <li>{item.vote_count}</li>
                         </ul>
                       </div>
                       <div className="card__description">
                         <p>{item.overview}</p>
                       </div>
                     </div>
                   </div>
                 </div>
               ))
             }
            
             </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search
