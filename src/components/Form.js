import { useState } from 'react';
import styles from './Form.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const Form = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();   

        if (enteredUsername.trim().length === 0 || enteredAge.length === 0 ) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
              });
            return;
        }

        if (enteredAge <= 0 ) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
              });
            return;
        }
        
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const errorHandler = () => {
        setError(null);
    };
    

    return (
        <div>
            {error && (
            <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
            />
            )}
            <form onSubmit={submitHandler}>
                <div className={styles.form}>
                    <div>
                        <label>Username</label>
                        <input 
                            type="text" 
                            defaultValue=''
                            value={enteredUsername}
                            onChange={usernameChangeHandler}
                        />
                    </div>
                    <div>
                        <label>Age(Years)</label>
                        <input 
                            type="number" 
                            defaultValue=''
                            value={enteredAge}
                            onChange={ageChangeHandler}
                        />
                    </div>
                    <div>
                        <Button type="submit">Add User</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;