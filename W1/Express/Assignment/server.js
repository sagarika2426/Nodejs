const express = require("express");
const app = express();
const fs = require("fs")
app.use(express.json())

const todoString = fs.readFileSync(`${__dirname}/todo.json`, {
    encoding: "utf-8"
})

let todos = JSON.parse(todoString)

//GET all data
app.get("/", (req, res) => {
    res.send(todos)
});

//GET a todo by ID
app.get("/:id" , (req, res) => {
    const {id} = req.params;
    const todo = todos.find(todo => todo.id === parseInt(id));
    res.send(todo);
})

//POST
app.post("/", (req, res) => {
    const body = req.body;
    const newTodo = {
      id: todos.length + 1,
      ...body
    };
    todos.push(newTodo);
    fs.writeFileSync(`${__dirname}/todo.json`, JSON.stringify(todos),{
        encoding:"utf-8"
    }) //writes the updated products array into products.json
    res.send(newTodo);
  });


//DELETE
app.delete("/:id", (req, res) => {
    const { id } = req.params;
    const updatedTodo = todos.filter(todo => todo.id != parseInt(id));
    if (updatedTodo.length === todos.length) {
       res.status(404).send({ error: "Todo not found" });
    }
    res.send(updatedTodo);

    fs.writeFileSync(`${__dirname}/todo.json`, JSON.stringify(updatedTodo),{
        encoding:"utf-8"
    }) 
    res.sendStatus(202).send(1);

  });

//PUT
app.put("/:id", (req, res) => {
    const {id} = req.params;
    const text =req.body;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));

    todos[todoIndex] = {
        ...todos[todoIndex],
        ...text
    };

    fs.writeFileSync(`${__dirname}/todo.json`, JSON.stringify(todos), {
        encoding: "utf-8"
    });
    res.send(todos[todoIndex]);
    
    
})


app.listen(3000, () => {
    console.log("I am Listening")
})