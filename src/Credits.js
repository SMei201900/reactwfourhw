import React from "react";

export default function Credits() {
	return (
		<div>
			<span className="credit">
				<a
					className="code-source"
					href="https://github.com/SMei201900/reactwfourhw"
					target="_blank"
				>
					Open source code{" "}
				</a>
				by:
				<a
					className="profile"
					href="https://www.linkedin.com/in/sally-mei-1a4439210/"
					target="_blank"
				>
					{" "}
					Sally Mei{" "}
				</a>
				and
				<a href="/" target="_blank">
					{" "}
					hosted by Netlify
				</a>
			</span>
		</div>
	);
}
