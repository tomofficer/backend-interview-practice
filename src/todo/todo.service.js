const knex = require("../db/connection");

//get all
function list() {
  return knex("todo")
    .select("*")
}

//post new todo
function create(newTodo) {
  return knex()
    .insert(newTodo)
    .into("todo")
    .returning("*")
    .first()
}

//get single todo
function read(id) {
  return knex("todo")
    .select("*")
    .where({ id })
    .first()
}


module.exports = {
  list,
  create,
  read
}







//TODO: Implement list function. Should get all todos
function list() {
  return knex("todo")
    .select("*")
};

//TODO: Implement read function. Should get a single todo
function read(id) {
  return knex("todo")
    .select("*")
    .where({ id })
    .first();
}

//TODO: Implement create function. Should create a new todo
function create(newTodo) {
  return knex()
    .insert(newTodo)
    .into("todo")
    .returning("*")
    .first()
};


//TODO: Implement update function. Should update a todo

//TODO: Implement destory function. Should delete a todo

//TODO: Export functions
module.exports = {
  list
};
