import Server from "express";
import cors from "cors";

const app = Server();

// Added Cors middleware
app.use(cors());

app.get("/dogs", (req, res) => {
  let dogNames = ["Labrador", "German Shepherd", "Golden", "Bulldog", "Poodle"];

  res.status(200).send(dogNames);
});

app.get("/cats", (req, res) => {
  let catNames = ["Persian", "Siamese", "Maine Coon", "Bengal", "Sphynx"];

  res.status(200).send(catNames);
});

app.listen(3000, () => console.log(`Server running on port 3000`));
