import "./config/database"
import { connectToDB } from "./config/database";

import app from "./utils/app";

const server = app();

connectToDB().then(() => {
	server.listen(8000, () => {
		console.log('Server started on port 8000');
	});
})
