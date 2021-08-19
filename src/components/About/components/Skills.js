import React from "react";
import { Heading, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

import bookshelf from "../../../../public/images/skills/bookshelf.png";
import django from "../../../../public/images/skills/django.png";
import express from "../../../../public/images/skills/express.png";
import javascript from "../../../../public/images/skills/javascript.png";
import knex from "../../../../public/images/skills/knex.png";
import koa from "../../../../public/images/skills/Koa.png";
import mongodb from "../../../../public/images/skills/mongodb.png";
import nextjs from "../../../../public/images/skills/nextjs.png";
import nodejs from "../../../../public/images/skills/nodejs.png";
import python from "../../../../public/images/skills/python.png";
import rails from "../../../../public/images/skills/rails.png";
import react from "../../../../public/images/skills/react.png";
import ruby from "../../../../public/images/skills/ruby.png";
import sql from "../../../../public/images/skills/sql.jpg";

const SkillsSection = () =>
{

	const skills = [javascript, react, nextjs, nodejs, sql, express, koa, mongodb, bookshelf, knex, python, django, ruby, rails, ];

	return <>
		<Box>
			<Heading my={12}>Skills</Heading>
			<SimpleGrid columns={4} spacing={10}>
				{skills.map((skill, index) =>
				{
					return <Image key={index} width={200} height={120} objectFit="contain" src={skill} alt=""/>;
				})}
			</SimpleGrid>
			<Text fontSize="20px" mt={12}>and a few more...</Text>
		</Box>
	</>;
};

export default SkillsSection;