const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const Cat = require("./models/cat");

async function seed() {
  await Cat.create({
    name: "Felix",
    color: "grey and white",
    hasClaws: true,
    likes: ["Sleeping in the sun", "Sipping milk", "Climbing trees"],
  });
  await Cat.create({
    name: "Cedric",
    color: "Ginger",
    hasClaws: false,
    likes: [
      "Fighting in the street",
      "Extreme ironing",
      "Eating out of the garbage bins",
    ],
  });
  console.log("Go Kitty Go!");
  mongoose.disconnect();
}

seed();
