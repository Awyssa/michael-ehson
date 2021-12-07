import nc from "next-connect";

const handler = nc()
	.get((req, res) =>
	{
		res.send("Hello world");
	});

export default handler;