import React, { useState } from "react";
import axios from "axios";

import "./DictionaryForm.css";

export default function DictionaryForm() {
	const [keyword, setKeyword] = useState(null);

	function handleResponse(response) {
		console.log(response.data[0]);
	}

	function updateKeyword(event) {
		event.preventDefault();
		setKeyword(event.target.value);
	}

	function search(event) {
		event.preventDefault();

		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	return (
		<div className="DictionaryForm">
			<form onSubmit={search}>
				<div className="row">
					<div className="col-6">
						<input
							type="search"
							title="Search"
							placeholder="Start typing..."
							autoFocus={true}
							className="form-control searchBox"
							onChange={updateKeyword}
						/>
					</div>
					<div className="col-3">
						<button
							type="submit"
							title="Submit"
							className="btn btn-primary">
							Search
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
