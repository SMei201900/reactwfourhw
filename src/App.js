import "./styles.css";
import "./ButtonStyling.css";
import "./AboutWeather.css";
import Credits from "./Credits";
import Search from "./Search";

export default function App() {
	return (
		<div className="App">
			<div class="container">
				<div class="firstgradient">
					<h1>Weather App</h1>
					<Search />
					<br />
					<Credits />
				</div>
			</div>
		</div>
	);
}
