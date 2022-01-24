import React from 'react'

export const BarraLateral = ({ topAnime }) => {
	return (
		<aside className='Barralateral'>
			<nav>
				<h3>Animes más populares</h3>
				{topAnime.map(anime => (
					<a 					
						href={anime.url} 
						target="_blank"
						key={anime.mal_id}						
						rel="noreferrer">
						<figure>
							<img 
								src={anime.image_url} 
								alt="Anime Image" />
						</figure>
						<h3>{ anime.title }</h3>					

					</a>
				))}
			</nav>
		</aside>
	)
}
