import styles from './UserList.module.css'
import Card from '../UI/Card';

const UserList = (props) => {
    return(
        <ul className={styles['users-list']}>
            {props.items.map(user => (

                <Card className={styles.user}>
                <li
                key={user.id}
                id={user.id}
                >
                </li>
                {user.username} ({user.age} years old)
                </Card>

            ))}
        </ul>
    );
};

export default UserList;