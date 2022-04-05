import React from "react";
import DictionaryForm from "./DictionaryForm";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container-fluid">
				<h1>React Dictionary App</h1>
				<h3>Look up a word:</h3>
			</div>
			<main>
				<DictionaryForm />
			</main>
			<footer className="text-center">
				Open-source code by{" "}
				<a
					href="https://www.sarah-codes.com/"
					className="portfolioLink">
					Sarah Ross
				</a>{" "}
				available on{" "}
				<a
					href="https://github.com/sarah-ross/react-dictionary-app"
					className="githubLink">
					Github
				</a>{" "}
				👩‍💻
			</footer>
		</div>
	);
}
