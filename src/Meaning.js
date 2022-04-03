import React from "react";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<p>{props.meaning.partOfSpeech}</p>
		</div>
	);
}
