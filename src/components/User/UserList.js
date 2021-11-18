import Card from "../UI/Card";
import classes from './UserList.module.css';

function UserList(props){
    return(
        <Card className={classes.users}>
            <ul>
               { props.userData.map(user => <li key={user.id}>{user.name} - {user.age}</li>)}
            </ul>
        </Card>
    )
}
export default UserList;