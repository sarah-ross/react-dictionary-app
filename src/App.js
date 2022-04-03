import DictionaryForm from "./DictionaryForm";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container-fluid pb-4">
				<h1>React Dictionary App</h1>
				<h3 className="mt-5">Look up a word:</h3>
				<main>
					<DictionaryForm />
				</main>
			</div>
			<footer className="text-center mt-4">
				Open-source code by Sarah Ross available on Github
				👩‍💻
			</footer>
		</div>
	);
}
