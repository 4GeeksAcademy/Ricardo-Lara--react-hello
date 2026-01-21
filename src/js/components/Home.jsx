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
		<Footer />
		</div>
	);
};

const NavBar = () =>{
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
  <div className="container-fluid">
    <a className="navbar-brand ps-5" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Services</a>
        <a className="nav-link me-4" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
	);
};

const Jumbotron = () => {
	return (
		<div className="container-xl bg-light rounded mb-4 mt-3 pt-3">
			<h1 className="display-4">A Warm Welcome!</h1>
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
			image: "https://placehold.co/500x325",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		})
	}
	return (
	<div className="container">
		<div className="row text-center">
		  {cardData.map((card, index)=>(
			<div className="col-12 col-md-3 mb-3" key={index}>
		<div className="card me-3 text-center" style={{ width: "18rem" }} key={index}>
            <img src={card.image} className="card-img-top" alt="..."/>
            <div className="card-body">
               <h5 className="card-title">{card.title}</h5>
               <p className="card-text">{card.text}</p>
			   <hr className="w-100"></hr>
               <a href="#" className="btn btn-primary">Finde Out More!</a>
            </div>
        </div>
		</div>
		  ))}
		</div>
	</div>
	);
};

const Footer = () =>{
	return (
		<div className="container-fluid bg-dark py-4 mt-3">
			<p className="text-light text-center">Copyright Your Website 2026</p>
		</div>
	);
};

export default Home;