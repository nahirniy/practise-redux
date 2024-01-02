import { Button } from 'components/Button/Button';
import css from './TaskForm.module.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const input = event.target.children[0];

    if (!input.value) {
      return;
    }

    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
