import React, { useEffect, useState } from "react";
import "./TitleCards.css";
// import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTFhY2YwZjAyYmI0MWJhMjk5YTczMWRlMGViYWU3MSIsIm5iZiI6MTcxOTE1NDI3Ny43NjMzMzksInN1YiI6IjY2NzgzMjY2MjlmMjg4YjIzZGNlOWNjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DTleUeo7XdC86gWNGpBJ5Y4chKBqDw1R5kbCffQ1or8",
			},
		};

		fetch(
			`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
			options
		)
			.then((response) => response.json())
			.then((response) => setApiData(response.results))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="titlecards">
			<h2>{title ? title : "Popular on Netflix"}</h2>
			<div className="card-list">
				{apiData.map((card, index) => (
					<div className="card" key={index}>
						<img
							src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
							alt=""
						/>
						<p>{card.original_title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TitleCards;

