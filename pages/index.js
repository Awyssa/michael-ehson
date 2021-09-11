import React from "react";
import Homepage from "../src/components/Homepage";

const Index = (props) =>
{
	return (
		<Homepage {...props} />
	);
};

export async function getStaticProps()
{
	const data = {
    name: "Michael Henderson",
    occupation: "Software Engineer / Full Stack Developer",
    age: "old",
		location: "London, UK"
	};

	return { props: data };
}

export default Index;