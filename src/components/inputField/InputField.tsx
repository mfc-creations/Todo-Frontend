import Spinner from "../spinner/Spinner";
import "./InputField.css";

const InputField: React.FC<Props> = ({
  value,
  loading,
  editing,
  todos,
  setInput,
  addTodo,
  updateTodo,
  setEditing,
}) => {
  const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      editing.value &&
      todos.filter((td) => td._id === editing.id).length > 0
    ) {
      updateTodo(editing.id, value);
      setEditing({ value: false, id: "" });
    } else addTodo(value);
    setInput("");
  };

  return (
    <div className="input__field">
      <input
        type="text"
        value={value}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      {loading ? (
        <Spinner />
      ) : (
        <button disabled={value.trim().length === 0} onClick={handleAddTodo}>
          {editing.value ? "Update" : "Add"}
        </button>
      )}
    </div>
  );
};

type Props = {
  value: string;
  loading: boolean;
  editing: { value: boolean; id: string };
  todos: Array<any>;
  setInput: (e: string) => void;
  addTodo: (v: string) => void;
  updateTodo: (id: string, title: string) => void;
  setEditing: ({}: any) => void;
};

export default InputField;
