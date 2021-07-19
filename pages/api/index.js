import nc from "next-connect";

const handler = nc()
// express like routing for methods
	.get((req, res) =>
	{
		res.send("Hello world");
	});

export default handler;