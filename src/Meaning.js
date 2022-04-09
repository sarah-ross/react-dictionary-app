import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<p>
				<small>{props.meaning.partOfSpeech}</small>
			</p>
			{props.meaning.definitions.map(function (
				definition,
				index
			) {
				return (
					<div key={index}>
						<div>
							Definition: {definition.definition}
							<br />
							<em>Usage example: {definition.example}</em>
							<br />
							<Synonyms synonyms={definition.synonyms} />
						</div>
					</div>
				);
			})}
			<Synonyms synonyms={props.meaning.synonyms} />
		</div>
	);
}
