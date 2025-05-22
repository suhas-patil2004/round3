import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;




app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/expenses", (req, res) => {
  res.render("expense.ejs");
  
});
const expenses = []; 
app.post("/expenses", (req, res) => {
  const { amount, type, category } = req.body;
  const newExpense = {
    id: expenses.length + 1,
    amount,
    type,
    category,
    date: new Date().toLocaleString(),
  };
  expenses.push(newExpense);
  console.log("Expense added:", newExpense);
  res.redirect("/expenses");
});


app.get("/register", (req, res) => {
  res.render("display.ejs", { expenses });
});





app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
