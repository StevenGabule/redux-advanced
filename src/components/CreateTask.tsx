import { FormEvent, useState } from 'react'
import { addTask } from '../features/tasks-slice';
import { useAppDispatch } from '../hooks';

const CreateTask = () => {
	const [newTitleSkill, setNewTitleSkill] = useState('')
	const dispatch = useAppDispatch();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
		dispatch(addTask({title: newTitleSkill}))
		setNewTitleSkill('')
  };

	return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <p>
        <input
          type="text"
          name="title"
          value={newTitleSkill}
          required
          onChange={(e) => setNewTitleSkill(e.target.value)}
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateTask