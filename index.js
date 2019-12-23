const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send({ hello: "world" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
	console.log('App listening on port 8000');
});

