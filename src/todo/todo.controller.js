
const service = require("./todo.service");

//get all
async function list(req, res) {
  const data = await service.list()
  res.json({ data })
}

//post new todo
async function create(req, res) {
  const { title, completed = false } = req.body;
  const newTodo = { title, completed };

  if (!req.body['title']) {
    res.status(400)
    return;
  }

  const todo = await service.create(newTodo);
  res.status(201).json(todo)
}

//get single todo
async function read(req, res) {
  const { todo_id } = req.params;
  const { data } = await service.read(todo_id);
  res.json({ data });
}





module.exports = {
  list,
  create,
  read
}

















//TODO: Implement list function. Should get all todos
async function list(req, res) {
  const data = await service.list()
  console.log(data)
  res.json({ data });
}


//TODO: Implement read function. Should get a single todo
async function read(req, res) {
  const { todo_id } = req.params;
  const { data } = await service.read(todo_id)
  res.json({ data })
}

//TODO: Implement create function. Should create a new todo
async function create(req, res) {
  const { title, completed = false } = req.body;
  const newTodo = { title, completed };

  if (!req.body['title']) {
    res.status(400)
    return;
  }

  const todo = await service.create(newTodo)
  res.status(201).json(todo)
}

//TODO: Implement update function. Should update a todo

//TODO: Implement destroy function. Should delete a todo

//TODO: Implement any required middleware

//TODO: Export middleware and functions
module.exports = {
  list
};
