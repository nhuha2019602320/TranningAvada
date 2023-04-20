const {
  add,
  deleteTodo,
  getTodoLists,
  editTodo,
  getTodo,
  getFieldsOfTodo,
} = require("../../database/todoRepository");

/**
 *
 * @param {*} ctx
 * @returns
 */
async function getTodos(ctx) {
  try {
    const { limit, sort, fields } = ctx.request.query;
    console.log(ctx.request.query);
    const todos = getTodoLists({ limit, sort, fields });
    return (ctx.body = todos);
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
}

/**
 *
 * @param {*} ctx
 * @returns
 */

async function getToDoById(ctx) {
  try {
    const { id } = ctx.params;
    const listFields = ctx.request.query.fields;
    const currentTodo = getTodo(id);
    console.log(listFields);
    if (currentTodo) {
      const todo = getFieldsOfTodo(currentTodo, listFields);
      ctx.body = todo;
      return todo;
    }

    ctx.status = 404;
    ctx.body = {
      success: false,
      error: "not existed product",
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
}
/**
 *
 * @param {*} ctx
 * @returns
 */
async function updateTodo(ctx) {
  try {
    const { id } = ctx.params;
    const currentTodo = getTodo(id);

    const dataUpdateTodo = ctx.request.body;

    if (currentTodo) {
      const todos = editTodo(dataUpdateTodo, id);
      ctx.body = todos;
      console.log("todo", todos)
      return todos;
    }

    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: "Update failed",
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
}

/**
 *
 * @param {*} ctx
 * @returns
 */
async function removeTodo(ctx) {
  try {
    const { id } = ctx.params;
    const currentTodo = getTodo(id);
    if (currentTodo) {
      deleteTodo(id);
      return (ctx.body = {
        success: true,
        error: "Delete success",
      });
      // return deleteTodo(id)
    }

    return (ctx.body = {
      success: false,
      error: "Delete failed",
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}

/**
 *
 * @param {*} ctx
 * @returns
 */
async function save(ctx) {
  try {
    const postData = ctx.request.body;
    add(postData);
    ctx.status = 201;
    return (ctx.body = {
      success: true,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}

module.exports = {
  getTodos,
  getToDoById,
  updateTodo,
  removeTodo,
  save,
};
