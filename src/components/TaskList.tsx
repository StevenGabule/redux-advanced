import { useAppSelector } from '../hooks';
import CreateTask from './CreateTask';

const TaskList = () => {
	const tasks = useAppSelector((state) => state.tasks.entities)
	return (
    <div>
      <h1>TaskList</h1>
			<CreateTask />
      <p>{JSON.stringify(tasks)}</p>
    </div>
  );
}

export default TaskList