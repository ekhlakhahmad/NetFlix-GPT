import React, { useEffect, useState } from "react";
import "./Player.css";
import { useParams } from "react-router-dom";

const Player = () => {

  const { id } = useParams();
	const [apiData, setApiData] = useState({
		name: "",
		id: "",
		published_at: "",
		type: "",
	});
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTFhY2YwZjAyYmI0MWJhMjk5YTczMWRlMGViYWU3MSIsIm5iZiI6MTcxOTE1NDI3Ny43NjMzMzksInN1YiI6IjY2NzgzMjY2MjlmMjg4YjIzZGNlOWNjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DTleUeo7XdC86gWNGpBJ5Y4chKBqDw1R5kbCffQ1or8",
		},
	};

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
			options
		)
			.then((response) => response.json())
			.then((response) => setApiData(response.results[0]))
			.catch((err) => console.error(err));
	});

	return (
		<div className="player">
			<img src="" alt="" />
			<iframe
				src={`https://www.youtube.com/embed/${apiData.key}`}
				frameborder="0"
				title="trailer"
				allowFullScreen></iframe>
			<div className="player-info">
				<p>{apiData.name}</p>
				<p>{apiData.published_at}</p>
				<p>{apiData.type}</p>
			</div>
		</div>
	);
};

export default Player;
