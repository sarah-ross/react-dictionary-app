import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./SearchResults.css";

export default function SearchResults(props) {
	if (props.results) {
		return (
			<div className="SearchResults">
				<div className="container">
					<section>
						<h2>{props.results.word}</h2>
						{props.results.phonetics.map(function (
							phonetic,
							index
						) {
							return (
								<div key={index}>
									<Phonetic phonetic={phonetic} />
								</div>
							);
						})}
					</section>
					{props.results.meanings.map(function (
						meaning,
						index
					) {
						return (
							<section key={index}>
								<Meaning meaning={meaning} />
							</section>
						);
					})}
				</div>
			</div>
		);
	} else {
		return null;
	}
}
