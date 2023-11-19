import express from "express";
const app = express();

app.listen(5000, () => {
	console.log(`Application started on 5000...`);
});

export default app;
