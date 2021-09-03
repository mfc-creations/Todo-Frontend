import { ReactComponent as EditIcon } from "../../icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import "./TodoCard.css";

const TodoCard: React.FC<Props> = ({ id, title, updateTodo, deleteTodo }) => {
  return (
    <div className="todo__card">
      <p>{title}</p>
      <div className="icon__gp">
        <EditIcon onClick={() => updateTodo(id, title)} />
        <DeleteIcon onClick={() => deleteTodo(id)} />
      </div>
    </div>
  );
};

type Props = {
  title: string;
  id: string;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
};

export default TodoCard;
