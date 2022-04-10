import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
	console.log(props);
	if (props.synonyms && props.synonyms.length > 0) {
		return (
			<ul className="Synonyms">
				<span>Synonyms:</span>
				{props.synonyms.map(function (synonym, index) {
					return <li key={index}>{synonym}</li>;
				})}
			</ul>
		);
	}
}
