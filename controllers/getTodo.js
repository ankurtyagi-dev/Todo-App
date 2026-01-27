import Todo from "../models/Todo.js";

const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo Data Fetched",
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server Error",
    });
  }
};

const getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data found with Given Id",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data Successfully fetched`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server Error",
    });
  }
};

export { getTodoById };
export default getTodo;
