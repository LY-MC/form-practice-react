import React, { useState } from 'react';
import Form from './components/Form';
import UserList from './components/UserList';
import Card from './UI/Card';
import Helmet from 'react-helmet';

import styles from './App.module.css'


function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (enteredUsername, enteredAge) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({username: enteredUsername, age: enteredAge, id: Math.random().toString() });
      return updatedUsers;
    });
    console.log(enteredUsername);
  };


  return (
    <div>
      <Helmet bodyAttributes={{style: 'background-color : #edfde0'}}/>
      <Card className={styles['users-form']}>
      <section>
      <Form onAddUser={addUserHandler}/>
      </section>
      </Card>
      <section className={styles.users}>
      <UserList items={users}/>
      </section>
    </div>
  );
};

export default App;
