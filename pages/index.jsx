import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import Gallery from "../components/gallery";
import Form from "../components/form";
import Searching from "../components/searching";
import Footer from "../components/footer";

export default function Home() {
	const searchRef = useRef(null);
	const [animes, setAnimes] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const base_url = "https://api.jikan.moe/v3/";
	const top_url = "top/anime";
	const search_url = "search/anime?q=";

	function top() {
		setLoaded(false);
		fetch(base_url + top_url)
			.then((res) => res.json())
			.then((data) => {
				setAnimes(data.top);
				setLoaded(true);
			})
			.catch((err) => console.warn(err.message));
	}

	useEffect(() => {
		top();
	}, []);

	function search() {
		setLoaded(false);
		const reference = searchRef.current?.value;
		fetch(base_url + search_url + reference)
			.then((res) => res.json())
			.then((data) => {
				setAnimes(data.results);
				if (data.results.length === 0) top();
				setLoaded(true);
			})
			.catch((err) => console.warn(err.message));
	}

	return (
		<div className="bg-darkest min-h-screen h-full w-full px-6 sm:px-8 md:px-12 lg:px-20">
			<Head>
				<title>Anime Lovers</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Form search={search} searchRef={searchRef} />
			{loaded ? <Gallery animes={animes} /> : <Searching />}
			<Footer />
		</div>
	);
}