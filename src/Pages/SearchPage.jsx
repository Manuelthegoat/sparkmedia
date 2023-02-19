import React from 'react'
import Search from '../Components/Search/Search'

const SearchPage = ({search, input}) => {
  return (
    <div>
          <section class="section section--first section--bg" data-bg="img/section/section.jpg">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section__wrap">
					<h1 class="section__title">Search result ({input})</h1>
					<ul class="breadcrumb">
						<li class="breadcrumb__item"><a href="index.html">Home</a></li>
						<li class="breadcrumb__item breadcrumb__item--active">Catalog grid</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
       <Search  search={search} />
    </div>
  )
}

export default SearchPage
