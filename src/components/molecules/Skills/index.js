import React, { useContext } from "react";
import { Heading, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { DarkMode } from "../../store/DarkMode";
import { DiNodejs, DiReact, DiDjango, DiRuby } from "react-icons/di";
import { GiWillowTree, GiBookshelf } from "react-icons/gi";
import {
	SiJavascript,
	SiNextdotjs,
	SiMysql,
	SiPostgresql,
	SiGraphql,
	SiApollographql,
	SiMongodb,
	SiExpress,
	SiRubyonrails,
	SiPython
} from "react-icons/si";


const SkillsSection = () =>
{
	const { darkMode } = useContext(DarkMode);

	const skills = [{
		name: "JavaScript",
		icon: <SiJavascript size="100%" />,
		url: null
	}, {
		name: "React.js",
		icon: <DiReact size="100%" />,
		url: "https://reactjs.org/"
	}, {
		name: "Next.js",
		icon: <SiNextdotjs size="100%" />,
		url: "https://nextjs.org/"
	}, {
		name: "Node.js",
		icon: <DiNodejs size="100%" />,
		url: "https://nodejs.org/en/"
	}, {
		name: "MySQL",
		icon: <SiMysql size="100%" />,
		url: "https://www.mysql.com/"
	}, {
		name: "PostgreSql",
		icon: <SiPostgresql size="100%" />,
		url: "https://www.postgresql.org/"
	}, {
		name: "GraphQl",
		icon: <SiGraphql size="100%" />,
		url: "https://graphql.org/"
	}, {
		name: "Apollo",
		icon: <SiApollographql size="100%" />,
		url: "https://www.apollographql.com/"
	}, {
		name: "MongoDB",
		icon: <SiMongodb size="100%" />,
		url: "https://www.mongodb.com/"
	}, {
		name: "Express",
		icon: <SiExpress size="100%" />,
		url: "https://expressjs.com/"
	}, {
		name: "Koa",
		icon: <GiWillowTree size="100%" />,
		url: "https://koajs.com/"
	}, {
		name: "Bookshelf.js",
		icon: <GiBookshelf size="100%" />,
		url: "https://bookshelfjs.org/"
	}, {
		name: "Python",
		icon: <SiPython size="100%" />,
		url: "https://www.python.org/"
	}, {
		name: "Django",
		icon: <DiDjango size="100%" />,
		url: "https://www.djangoproject.com/"
	}, {
		name: "Ruby",
		icon: <DiRuby size="100%" />,
		url: "https://www.ruby-lang.org/en/"
	}, {
		name: "Rails",
		icon: <SiRubyonrails size="100%" />,
		url: "https://rubyonrails.org/"
	}];

	return (
		<Box px="6">
			<Heading my="8">My Skills</Heading>
			<SimpleGrid columns={{base: 2, sm: 4}} spacing="10">
				{skills.map((skill, index) => (
					<Box
						key={index}
						as="a"
						href={skill.url}
						target="_blank"
						textAlign="center"
						display="flex"
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
						_hover={{ mt: -6 }}
						transition="200ms"
					>
						<Text fontWeight="500" pb="1">{skill.name}</Text>
						<Box
							height="80px"
							color={darkMode ? "#d9d9d9" : "#262626"}
						>
							{skill.icon}
						</Box>
					</Box>
				)
				)}
			</SimpleGrid>
			<Text fontSize="20px" mt="12">and a few more...</Text>
		</Box>
	);
};

export default SkillsSection;
