const faker = require("faker");
const { writeFileSync } = require("fs");

const count = 50;
let i = 0;

const posts = [];

while (i < count) {
  const post = {
    publishingDate: faker.date.recent(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    tags: [faker.lorem.word(), faker.lorem.word()],
    author: null,
  };

  posts.push(post);

  i++;
}

const rawData = JSON.stringify(posts, null, 2);

writeFileSync("./lecture_5/posts.json", rawData, {
  encoding: "utf-8",
});
