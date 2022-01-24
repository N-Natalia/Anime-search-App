import React from 'react'

export const AnimeCard = ({anime}) => {
	return (
		<article className="anime-card">
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime.image_url} 
						alt="Anime Image" />
				</figure>
				<h2>{ anime.title }</h2>
				<h3>Episodios: { anime.episodes }</h3>
				<h3> Tipo: { anime.type}</h3>
				<p> 
					<h3> Sinopsis: </h3>
					{ anime.synopsis}
				</p>
				
			</a>
		</article>
	)
}
