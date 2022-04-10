import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
	console.log(props);
	if (props.synonyms && props.synonyms.length > 0) {
		return (
			<div className="Synonyms">
				<span>Synonym(s): </span>
				{props.synonyms.map(function (synonym, index) {
					return <li key={index}>{synonym}</li>;
				})}
			</div>
		);
	}
}
