import Server from "express";
import cors from "cors";

const app = Server();

// Added Cors middleware
app.use(cors());

app.get("/dogs", (req, res) => {
  let dogNames = ["Labrador", "German Shepherd", "Golden", "Bulldog", "Poodle"];

  res.status(200).send(dogNames);
});

app.listen(3000, () => console.log(`Server running on port 3000`));
