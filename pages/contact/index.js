import React from "react";
import Contact from "../../src/components/pages/Contact";
const Index = () =>
{
	return (
		<Contact />
	);
};

export async function getStaticProps()
{
	const data = {
    name: "Michael Henderson",
    occupation: "Software Engineer",
    age: "old"
	};

	return { props: data };
}

export default Index;
