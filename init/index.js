const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wayout';

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
.then((res) => {
    console.log("Connected to MongoDB");
})
.catch(err => console.log(err));


const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '66ab178b4df714bb4c9dbc60'}));
    await Listing.insertMany(initData.data);
    console.log("data was intialised");
};

initDB();