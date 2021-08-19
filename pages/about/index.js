import React from "react";
import About from "../../src/components/About";
import photo from "../../public/images/pictures/1.jpeg";

const Index = () =>
{
	return (
		<About />
	);
};

// export async function getStaticProps()
// {

// 	const data = {
//     name: "Michael Henderson",
//     occupation: "Software Engineer",
//     age: "old",
// 		myImage: photo
// 	};

// 	return { props: data };
// }

export default Index;
