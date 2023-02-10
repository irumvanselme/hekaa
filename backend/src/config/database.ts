import mongoose from 'mongoose';

export async function connectToDB() {
  mongoose.set("strictQuery", true)
	mongoose.connect(
		'mongodb+srv://root:f4H7rqLp5eR16eJM@datastore.6fcxw3r.mongodb.net/hekaa_db?retryWrites=true&w=majority'
	);
	
  require("../models/applications")

	console.log("Connected to the database")
}
