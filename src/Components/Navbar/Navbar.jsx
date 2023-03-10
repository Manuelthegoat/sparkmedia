import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({SearchApi, input, onUserInput, setInput, SearchSeriesApi,SearchAnimeApi}) => {
  return (
    <div>
      <header className="header">
	<div className="header__wrap">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="header__content">
						<a href="/" className="header__logo">
							<img src="img/logo2.png" className='logoimage' alt=""/>
						</a>
						<ul className="header__nav">
						<li className="header__nav-item">
								<a href="/" className="header__nav-link">Home</a>
							</li>
							
							<li className="header__nav-item">
								<a href="/movies" className="header__nav-link">Movies</a>
							</li>
							<li className="header__nav-item">
								<a href="/series" className="header__nav-link">Series</a>
							</li>
						

							<li className="header__nav-item">
								<a href="/anime" className="header__nav-link">Anime</a>
							</li>
							<li className="header__nav-item">
								<a href="/topten" className="header__nav-link">Top 10</a>
							</li>
							<li className="header__nav-item">
								<a href="/blog" className="header__nav-link">Blog</a>
							</li>

							
							<li className="dropdown header__nav-item">
								<a className="dropdown-toggle header__nav-link header__nav-link--more" href="#" role="button" id="dropdownMenuMore" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"/></svg>
								</a>

								<ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuMore">
									<li><a href="about.html">Help</a></li>
								</ul>
							</li>
							
						</ul>
						
						<div className="header__auth">
							<button className="header__search-btn" aria-label="search btn" type="button">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
							</button>

							
							<div className="dropdown header__lang">
								<a className="dropdown-toggle header__nav-link" href="#" role="button" id="dropdownMenuLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN</a>

								<ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuLang">
									<li><a href="#">English</a></li>
									<li><a href="#">Spanish</a></li>
									<li><a href="#">Russian</a></li>
								</ul>
							</div>
							

							<a href="https://www.buymeacoffee.com/manuelcodes" target='_blank' className="header__sign-in">
							<i class="fa-solid fa-coins color"></i>
								<span>Donate</span>
							</a>
						</div>
						
						<button className="header__btn" type="button">
							<span></span>
							<span></span>
							<span></span>
						</button>
						
					</div>
				</div>
			</div>
		</div>
	</div>


	<form onSubmit={SearchApi}  className="header__search">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="header__search-content">
						<input type="text" placeholder="I'm looking for..." value={input} onChange={onUserInput} />
						<button type="submit">Search</button>
					</div>
				</div>
			</div>
		</div>
	</form>
	
</header>
    </div>
  )
}

export default Navbar
