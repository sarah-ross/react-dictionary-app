import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

import "./DictionaryForm.css";

export default function DictionaryForm(props) {
	const [keyword, setKeyword] = useState(
		props.defaultKeyword
	);
	const [results, setResults] = useState(null);
	const [loaded, setLoaded] = useState(false);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function updateKeyword(event) {
		event.preventDefault();
		setKeyword(event.target.value);
	}

	function search() {
		// api documentation link: https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="DictionaryForm">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col">
							<input
								type="search"
								title="Search"
								placeholder="Start typing..."
								autoFocus={true}
								className="form-control searchBox"
								onChange={updateKeyword}
							/>
						</div>
						<div className="col-4">
							<button
								type="submit"
								title="Submit"
								className="btn btn-primary">
								Search
							</button>
						</div>
					</div>
				</form>
				<small className="searchSuggestions">
					Suggestions: travel, book, desk, wine, forest...
				</small>
				<SearchResults results={results} />
			</div>
		);
	} else {
		load();
		return "Loading...";
	}
}
