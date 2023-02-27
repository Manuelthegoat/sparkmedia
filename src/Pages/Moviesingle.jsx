import React from 'react'

const Moviesingle = ({responses, country, genre, video, reviews, similar, company}) => {
    let imgurl = 'https://www.themoviedb.org/t/p/w440_and_h660_face'

    const mtitle = `${responses.original_title}`
    const titledone = mtitle.replace(/\s+/g, "-").toLowerCase();
    const year = `${responses.release_date}`
    const yeardone = year.slice(0,4)
    const linkdownload = `https://yts.mx/movies/${titledone}-${yeardone}`

 
  return (
    <div>
        <section className="section details">
          <div className="details__bg"  data-bg={`${imgurl}${responses.poster_path}`}></div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="details__title">{responses.original_title}</h1>

              </div>
              <div className="col-12 col-xl-6">
                <div className="card card--details">
                  <div className="card__cover">
                    <img src={`${imgurl}${responses.poster_path}`} alt="" />
                  </div>
                  <div class="card__content">
                    <div className="card__wrap">
                      <span className="card__rate">{responses.vote_average}</span>
                      <ul className="card__list">
                        {country.map((item)=>(<li>{item.iso_3166_1}</li>))}
                        <li>{responses.original_language}</li>
                      </ul>
                    </div>
                    <ul className="card__meta">
                      <li> {company.map((item)=>(<span>{item.name},</span>))} </li>
                      <li><span>Genre:</span> {genre.map((item)=>(<a>{item.name}</a>))} </li><br/>
                      <li><a>{responses.tagline}</a></li>
                      <li><span>Release Date:</span> {responses.release_date}</li>
                      <li><span>Budget: </span>{responses.budget}</li>
                      <li><span>Country: </span>{country.map((item)=>(<p>{item.name}&nbsp;</p>))}</li>
                    </ul>
                    <div class="card__description card__description--details">
                      {responses.overview}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6">
              {video.slice(0,1).map((item)=>(
                  <iframe src={`https://www.youtube.com/embed/${item.key}`}
                  frameborder='0'
                  allow='autoplay; encrypted-media'
                  allowfullscreen
                  title='video'
                  className='myvideo'
          />
                 ))}
              </div>
            </div>
          </div>
       {/* ============   DOWNLOAD LINKS ============ */}
          <div className="col-12 col-lg-6 mb-100">
            <div class="accordion" id="accordion">
              <div className="accordion__card">
                <div className="card-header" id="headingOne">
                <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								<span>Download Link 1</span>
								<span>Netnaija</span>
							</button>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <table className="accordion__list">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>#</th>
                          <th>#</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
              <div className="accordion__card">
                <div className="card-header" id="headingTwo">
                <button type="collapsed"  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								<span>Download Link 2</span>
								<span>TFPDL</span>
							</button>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    <table className="accordion__list">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>#</th>
                          <th>#</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
              <div className="accordion__card">
                <div className="card-header" id="headingThree">
                <button type="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								<span>Download Link 3</span>
								<span>YTS</span>
							</button>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body">
                    <table className="accordion__list">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>#</th>
                          <th>#</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============ END DOWNLOAD LINKS ============ */}



        </section>
        <section className="content">
          <div className="content__head">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="content__title">Discover</h2>
                  <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                  <li class="nav-item" role="presentation">
							<a class="nav-link active" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="true">Reviews</a>
						</li>

						<li class="nav-item" role="presentation">
							<a class="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Photos</a>
						</li>
                  </ul>
                  <div class="content__mobile-tabs" id="content__mobile-tabs">
						<div class="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<input type="button" value="Comments"/>
							<span></span>
						</div>

						<div class="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
							<ul class="nav nav-tabs" role="tablist">

								<li class="nav-item"><a class="nav-link active" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Reviews</a></li>

								<li class="nav-item"><a class="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Photos</a></li>
							</ul>
						</div>
					</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 col-xl-8">
                <div className="tab-pane fade show active" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
                  <div className="row">
                    <div className="col-12">
                      <div className="reviews">
                        <ul className="reviews__list">
                          {reviews.map((item)=>(
                            <li className="reviews__item">
                              <div className="reviews__author">
                                {/* <img src={`${imgurl}${item.author_details.avatar_path}`} alt="" className="reviews__avatar" /> */}
                                <span className="reviews__name">{item.author_details.username}</span>
                                <span className="reviews__time">{item.created_at} by {item.author_details.username}</span>
                                <span className="reviews__rating">{item.author_details.rating}<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg></span>
                              </div>
                              <p className="reviews__text" >{item.content}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* start gallery */}


                {/* end gallery */}
              </div>
              <div className="col-12 col-lg-4 col-xl-4">
                <div className="row row--grid">
                  <div className="col-12">
                    <h2 className="section__title section__title--sidebar">You May Also Like...</h2>
                  </div>
                  {similar.slice(0,6).map((item)=>(
                    <div className="col-6 col-sm-4 col-lg-6">
                      <div className="card">
                        <a href="" className="card__cover">
                          <img src={`${imgurl}${item.poster_path}`} alt="" />
                          <span class="card__play">
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
                  ))}

                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Moviesingle
