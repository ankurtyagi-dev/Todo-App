import Todo from "../models/Todo.js";

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    // await Todo.findByIdAndDelete({ _id: id });
    await Todo.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Todo Deleted",
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

export default deleteTodo;
