import React from "react";

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
						<p>
							{definition.definition}
							<br />
							<em>{definition.example}</em>
						</p>
					</div>
				);
			})}
		</div>
	);
}
