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

	function handleDictionaryResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelsResponse(response) {
		console.log(response);
	}

	function updateKeyword(event) {
		event.preventDefault();
		setKeyword(event.target.value);
	}

	function search() {
		// api documentation: https://dictionaryapi.dev/
		const apiDictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
		axios
			.get(apiDictionaryUrl, {
				headers: { Authorization: `Beaer ${pexelsApiKey}` },
			})
			.then(handleDictionaryResponse);

		// api documentation: https://www.pexels.com/api/documentation/
		const pexelsApiKey = `563492ad6f91700001000001c477b8ebce794f00b6277967a70a61ce`;
		const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;

		const headers = {
			Authorization: `Bearer ${pexelsApiKey}`,
		};
		axios
			.get(pexelsApiUrl, { headers: headers })
			.then(handlePexelsResponse);
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
					Try: travel, book, forest, wine...
				</small>
				<SearchResults results={results} />
			</div>
		);
	} else {
		load();
		return "Loading...";
	}
}
