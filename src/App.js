import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar";
import TopAnimes from "./Components/TopAnimes/TopAnimes";
import PreviewCard from "./Components/PreviewCard/PreviewCard";

function App() {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div
				className="container"
			>
				<TopAnimes
					cards={[
						<PreviewCard imageUrl="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg" small={true} title="Fullmetal Alchemist : Brotherhood" />,
						<PreviewCard imageUrl="https://cdn.myanimelist.net/images/anime/1764/126627l.jpg" small={true} title="Bleach: Sennen Kessen-hen" />,
						<PreviewCard imageUrl="https://cdn.myanimelist.net/images/anime/1160/122627l.jpg" small={true} title="Kaguya-sama wa Kokurasetai: Ultra Romantic" />,
					]}
				/>
			</div>
		</>
	);
}

export default App;