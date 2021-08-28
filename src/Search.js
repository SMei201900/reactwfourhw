import React, { useState } from "react";
import axios from "axios";

export default function Search() {
	let [city, setCity] = useState("");
	let [temp, setTemp] = useState("");
	let [description, setDescription] = useState("");
	let [humidity, setHumidity] = useState("");
	let [windspeed, setWindspeed] = useState("");
	let [icon, setIcon] = useState("");
	let [yes, setYes] = useState(false);

	function weather(response) {
		setTemp(Math.round(response.data.main.temp));
		setDescription(response.data.weather[0].description);
		setHumidity(response.data.main.humidity);
		setWindspeed(response.data.wind.speed);
		setIcon(
			`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
		);
		setYes(true);
	}

	function submitting(event) {
		event.preventDefault();
		let apiKey = `640c47110d9c3fa96e9fd6063e6e2e9f`;
		let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiURL).then(weather);
	}

	function typedvalue(event) {
		setCity(event.target.value);
	}

	let form = (
		<form onSubmit={submitting}>
			<input type="search" placeholder="Type a city" onChange={typedvalue} />
			<input type="submit" className="btn btn-primary blue" value="Search" />
			<button className="green"> Current Location </button>
		</form>
	);

	if (yes) {
		return (
			<div>
				{form}
				<h2>{city}</h2>

				<div class="row">
					<div class="col-4 time-and-date">Time and Date</div>
					<div class="col-4">
						<div class="theweather">{description}</div>
						<div class="clearfix">
							<img src={icon} />
						</div>
						<span class="tempdigits">{temp}</span>
						<a class="ren-to-cel" href="#">
							{" "}
							°C
						</a>
						|
						<a class="cel-to-ren" href="#">
							{" "}
							°F
						</a>
					</div>
					<div class="col-4">
						<li>
							Humidity: <span> {humidity} %</span>
						</li>
						<li>
							Wind Speed: <span> {windspeed} km/h </span>
						</li>{" "}
					</div>
				</div>
			</div>
		);
	} else {
		return form;
	}
}
