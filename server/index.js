import express from "express";

const app = express();
// middle wares
app.use(express.json());
let resturants = [
  {
    id: "1",
    name: "KFC",
    special: "Crispy Chicken",
  },
  {
    id: "2",
    name: "A2B",
    special: "Sweets",
  },
];
// get info
app.get("/res", (req, res) => {
  res.send(resturants);
});

app.post("/add/res", (req, res) => {
  const newRestuarnt = {
    ...req.body,
    id: (resturants.length + 1).toString(),
  };
  resturants = [...resturants, newRestuarnt];
  res.send(resturants);
});

app.put("/edit/res/:id", (req, res) => {
  const { id } = req.params;
  const findRes = resturants.find((res) => res.id === id);
  findRes.special = req.body.special;
  res.send(resturants);
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const newset = resturants.filter((res) => res.id != id);
  resturants = [...newset];
  res.send(`Deleted Resturant`);
});
//listen to ther server
app.listen(9000, () => console.log("server sarted in localhost:9000"));
