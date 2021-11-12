const Robots = () =>
{};

export const getServerSideProps = async({ res }) =>
{
	const robots = `User-agent: *
Allow: /

Sitemap: https://www.m-henderson.com/sitemap.xml`;

	res.setHeader("Content-Type", "text/plain");
	res.write(robots);
	res.end();

	return {props: {}};
};

export default Robots;