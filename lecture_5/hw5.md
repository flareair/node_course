# Home work 5

## 1

Install mongodb and required utils locally using tips from the lecture presentation.
Play around with dbs and collections using mongosh

## 2

Enhance the app in lecture_5/mongoose

Create third model for comments.

Each comment should contain data or a reference to the user which wrote it,
a body of the comment and a creation date

So there are 3 mongoose schemas/models: Users, Posts, Comments

Relationships of schemas:

- Each user can have multiple posts
- Each user can have multiple comments under multiple posts (their own or under posts of other users)
- Each post can have multiple comments under it

Add all nesessary data validations and unique flags which you think make sence.

Create following endpoints:

- GET all posts list with title, author and number of comments for each of them. Think about pagination since there could be a lot of posts.
- GET single post data (all properties) by it's id with all comments related to it.
- GET single user by his(her) id including list of their post.
- POST create a new user
- POST create a new post by user
- DELETE remove post by id including all comments under it
- DELETE remove user including all his(her) posts
- You can add more endpoints of your choice as extra task

_Tips!_
Think carefully about which data to nest and which to store in separate collections (normalize).
These decisions could significanty impact performance of your DB
Look here https://docs.mongodb.com/manual/core/data-model-design/

Use Mongoose pre hooks to manilulate with related data on delete or other events
https://mongoosejs.com/docs/middleware.html#pre
