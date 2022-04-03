import React, { useState } from "react";

import "./DictionaryForm.css";

export default function DictionaryForm() {
	const [keyword, setKeyword] = useState(null);

	function updateKeyword(event) {
		event.preventDefault();
		console.log(event);
		setKeyword(event.target.value);
	}

	function search(event) {
		event.preventDefault();
		console.log(event);
		alert(`Searching for ${keyword} definition...`);
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
