import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";
import Navbar from "./navbar";
import Inicio from "./inicio";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Inicio />
			<div className="container py-5 cards gap-5">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	)
};

export default Home;
