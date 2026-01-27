import Todo from "../models/Todo.js";

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

     if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data found with Given Id",
      });
    }

    res.status(200).json({
        success: true,
        data: todo,
        message: "Updated Successfully"
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server Error",
    });
  }
};

export default updateTodo;
