import moment from "moment";

const Sitemap = () =>
{};

export const getServerSideProps = async({ res }) =>
{
	const XML_OPEN_TAG = "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">";
	const XML_CLOSE_TAG = "</urlset>";

	const URLS = [
		"https://www.m-henderson.com",
		"https://www.m-henderson.com/about",
		"https://www.m-henderson.com/projects",
		"https://www.m-henderson.com/contact"
	];

	const SITEMAP_URLS = URLS.map(url =>
	{
		return `<url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <lastmod> ${moment().startOf("month").format("DD-MM-YYYY")} </lastmod>
    <priority>0.6</priority>
    </url>
    `;
	});

	const sitemap =  XML_OPEN_TAG + SITEMAP_URLS.join("") + XML_CLOSE_TAG;

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {props: {}};
};

export default Sitemap;