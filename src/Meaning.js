import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h4 className="partOfSpeech">
				{props.meaning.partOfSpeech}
			</h4>
			{props.meaning.definitions.map(function (
				definition,
				index
			) {
				return (
					<div key={index}>
						<div className="definition">
							{definition.definition}
						</div>
						<div className="example">
							{definition.example}
						</div>
						<Synonyms synonyms={definition.synonyms} />
						<Synonyms synonyms={props.meaning.synonyms} />
					</div>
				);
			})}
		</div>
	);
}
