import { useAppDispatch } from '../hooks'
import { removeTask } from '../features/tasks-slice'

type TaskPros = {
	task: Task
}

const Task = ({task}: TaskPros) => {
	const dispatch = useAppDispatch()

	return (
    <div>
      <h6>Task</h6>
      <p>
        <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
      </p>
    </div>
  );
}

export default Task