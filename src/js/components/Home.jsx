import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
		<NavBar />
		<Jumbotron />
		<Cards />
		</div>
	);
};

const NavBar = () =>{
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Services</a>
        <a className="nav-link" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
	);
};

const Jumbotron = () => {
	return (
		<div className="container-xl bg-secondary mb-4">
			<h1>A Warm Welcome!</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			<button type="button" className="btn btn-primary mb-5">Call to action!</button>
		</div>
	);
};

const Cards = () =>{
	let cardData = [];
	for (let i=0; i<4; i++){
		cardData.push({
			title: "Card title",
			image: "https://via.placeholder.com/300x200",
			text: "Some quick example text to build on the card title and make up the bulk of the card’s content."
		})
	}
	return (
	<div className="container">
		<div className="row">
		{cardData.map((card, index)=>(
		<div className="card me-3" style={{ width: "18rem" }} key={index}>
  <img src={card.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{card.title}</h5>
    <p className="card-text">{card.text}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
		))}
		</div>
	</div>
	);
};

export default Home;