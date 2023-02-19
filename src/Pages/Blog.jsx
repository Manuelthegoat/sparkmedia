import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Blog = () => {
    const [response, setResponse] = useState([]);
    const fetchMovies = async () => {
        try{
            const res = await axios.get('https://newsapi.org/v2/top-headlines?country=ng&apiKey=f2ad11fbf0bb4f3b839d7edd734ccd43')
             console.log(res.data)
            setResponse(res.data.articles)
        }catch(err){
            console.log('error don land',err)
        }
    }
    useEffect(()=>{
      fetchMovies();
      // getMovies();
    },[]);
  return (
    <div>
     <section class="section section--first section--bg" data-bg="img/section/section.jpg">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section__wrap">
					<h1 class="section__title">Blog</h1>
					<ul class="breadcrumb">
						<li class="breadcrumb__item"><a href="index.html">Get Latest News</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<div className="container">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active">
              <div className="row row--grid">
                {response.map((item)=>(
                     <div className="col-6 col-sm-12 col-lg-6">
                     <div className="card card--list">
                       <a href="" className="card__cover">
                         <img src={item.urlToImage} alt="" />
                         <span className="card__play">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
                                       </span>
                       </a>
                       <div className="card__content">
                         <h3 className="card__title"><a href="">{item.title}</a></h3>
                         <span className="card__category">
                           <a href="">{item.author}</a>
                         </span>
                         <div className="card__wrap">
                           <span className="card__rate">{item.rating}</span>
                           <ul className="card__list">
                             <li>{item.quality}</li>
                             <li>{item.age}</li>
                           </ul>
                         </div>
                         <div className="card__description">
                           <p>{item.content}</p>
                         </div>
                       </div>
                     </div>
                   </div>
                ))}
                </div>
                </div>
                </div>
              </div>
    </div>
  )
}

export default Blog
