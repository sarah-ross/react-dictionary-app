import React from "react";
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
				Open-source code by{" "}
				<a
					href="https://www.sarah-codes.com/"
					target="_blank">
					Sarah Ross
				</a>{" "}
				available on{" "}
				<a
					href="https://github.com/sarah-ross/react-dictionary-app"
					target="_blank">
					Github
				</a>{" "}
				👩‍💻
			</footer>
		</div>
	);
}
