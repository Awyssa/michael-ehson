import React from "react";
import { Heading, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import bookshelf from "../../../../public/images/skills/bookshelf.png";
import django from "../../../../public/images/skills/django.png";
import express from "../../../../public/images/skills/express.png";
import javascript from "../../../../public/images/skills/javascript.png";
import knex from "../../../../public/images/skills/knex.png";
import koa from "../../../../public/images/skills/Koa.png";
import apollo from "../../../../public/images/skills/apollo.png";
import graphQl from "../../../../public/images/skills/graphql.png";
import mongodb from "../../../../public/images/skills/mongodb.png";
import nextjs from "../../../../public/images/skills/nextjs.png";
import nodejs from "../../../../public/images/skills/nodejs.png";
import python from "../../../../public/images/skills/python.png";
import rails from "../../../../public/images/skills/rails.png";
import react from "../../../../public/images/skills/react.png";
import ruby from "../../../../public/images/skills/ruby.png";
import mySql from "../../../../public/images/skills/mySql.png";
import postgreSql from "../../../../public/images/skills/postgreSql.svg";

const SkillsSection = () =>
{
	const skills = [
		{ name: "JavaScript", image: javascript, url: null },
		{ name: "React.js", image: react, url: "https://reactjs.org/" },
		{ name: "Next.js", image: nextjs, url: "https://nextjs.org/" },
		{ name: "Node.js", image: nodejs, url: "https://nodejs.org/en/" },
		{ name: "MySQL", image: mySql, url: "https://www.mysql.com/" },
		{ name: "PostgreSql", image: postgreSql, url: "https://www.postgresql.org/" },
		{ name: "GraphQl", image: graphQl, url: "https://www.apollographql.com/" },
		{ name: "Apollo", image: apollo, url: "https://graphql.org/" },
		{ name: "MongoDB", image: mongodb, url: "https://www.mongodb.com/" },
		{ name: "Express", image: express, url: "https://expressjs.com/" },
		{ name: "Koa", image: koa, url: "https://koajs.com/" },
		{ name: "Bookshelf.js", image: bookshelf, url: "https://bookshelfjs.org/" },
		{ name: "Knex.js", image: knex, url: "https://knexjs.org/" },
		{ name: "Python", image: python, url: "https://www.python.org/" },
		{ name: "Django", image: django, url: "https://www.djangoproject.com/" },
		{ name: "Ruby", image: ruby, url: "https://www.ruby-lang.org/en/" },
		{ name: "Rails", image: rails, url: "https://rubyonrails.org/" },
	];

	return <>
		<Box px={6}>
			<Heading my={8}>My Skills</Heading>
			<SimpleGrid columns={{base: 2, md: 4}} spacing={10}>
				{skills.map((skill, index) =>
				{
					return (
						<Box key={index} as="a" href={skill.url} target="_blank" textAlign="center">
							<Text>{skill.name}</Text>
							<Image width={200} height={120} objectFit="contain" src={skill.image} alt=""/>
						</Box>
					);
				})}
			</SimpleGrid>
			<Text fontSize="20px" mt={12}>and a few more...</Text>
		</Box>
	</>;
};

export default SkillsSection;