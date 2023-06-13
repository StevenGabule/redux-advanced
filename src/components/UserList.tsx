import { useAppSelector } from '../hooks'

const UserList = () => {
	const users = useAppSelector(state => state.users.entities)
	return (
		<div>
			<h5>Users</h5>
			<p>
				{JSON.stringify(users)}
			</p>
		</div>
	)
}

export default UserList