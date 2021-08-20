import { connect } from "mongoose";
import { app } from "./app";

connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(3000, () => console.log("Api is listening on port 3000"));
  })
  .catch((err) => console.error("Database connection error", err));
