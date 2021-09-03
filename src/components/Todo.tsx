import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux";
import { RootState } from "../redux/reducers";
import InputField from "./inputField/InputField";
import TodoCard from "./todoCard/TodoCard";
import Spinner from "./spinner/Spinner";
import "./Style.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [editing, setEditing] = useState({ value: false, id: "" });

  const { fetchLoading, todos, addLoading } = useSelector(
    (state: RootState) => state.todo
  );
  const dispatch = useDispatch();
  const { addTodo, fetchTodos, updateTodo, deleteTodo } = bindActionCreators(
    actions,
    dispatch
  );

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleEdit = (id: string, val: string) => {
    setEditing({ value: true, id: id });
    setInput(val);
  };

  return (
    <div className="todo__page">
      <InputField
        value={input}
        setInput={setInput}
        addTodo={addTodo}
        updateTodo={updateTodo}
        loading={addLoading}
        editing={editing}
        setEditing={setEditing}
        todos={todos}
      />
      {fetchLoading ? (
        <Spinner />
      ) : todos.length < 1 ? (
        <span>No todos found</span>
      ) : (
        todos.map((item) => (
          <TodoCard
            key={item._id}
            id={item._id}
            title={item.title}
            deleteTodo={deleteTodo}
            updateTodo={handleEdit}
          />
        ))
      )}
    </div>
  );
};

export default Todo;
