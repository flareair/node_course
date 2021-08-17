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
    address: {
      city: faker.address.cityName(),
      addressLine: faker.address.streetAddress(),
    },
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

  users.push(user);

  i++;
}

const rawData = JSON.stringify(users, null, 2);

writeFileSync("./lecture_5/data_set.json", rawData, {
  encoding: "utf-8",
});
