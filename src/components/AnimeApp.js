import { useState, useEffect } from 'react';
import { ContenidoPrincipal } from './ContenidoPrincipal';
import { BarraLateral } from './BarraLateral';
import { Header } from './Header';


export const AnimeApp = () => {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");

	const GetTopAnime = async () => {
		const url1=`https://api.jikan.moe/v3/top/anime/1/bypopularity`
		const resp = await fetch(url1)
		const data = await resp.json()

		//5 primeros top de la lista de animes
		SetTopAnime(data.top.slice(0,5));	
	}
	
	const HandleSearch = e => {
		e.preventDefault();
		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}
	
	useEffect(() => {			
		GetTopAnime();
	}, []);	
	
	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<BarraLateral 
					topAnime={topAnime} 
                />
				<ContenidoPrincipal
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					animeList={animeList} 
                />
			</div>
		</div>
	);
}