const faker = require("faker");
const { writeFileSync } = require("fs");

const count = 1000;
let i = 0;

const users = [];

while (i < count) {
  const user = {
    userName: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthDate: faker.date.past(),
    age: Number((10 + Math.random() * 60).toFixed(0)),
  };

  if (Math.random() > 0.5) {
    user.phone = [
      {
        type: "mobile",
        number: faker.phone.phoneNumber(),
      },
      {
        type: "office",
        number: faker.phone.phoneNumber(),
      },
    ];
  }

  if (Math.random() > 0.5) {
    user.address = {
      city: faker.address.cityName(),
      addressLine: faker.address.streetAddress(),
    };
  }

  users.push(user);

  i++;
}

const rawData = JSON.stringify(users, null, 2);

writeFileSync("./lecture_5/people.json", rawData, {
  encoding: "utf-8",
});
