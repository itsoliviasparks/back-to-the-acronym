import firebase from '../firebase';
import { useEffect, useState } from 'react';
import { getDatabase, onValue, ref, push, remove } from 'firebase/database';

const SavedBackronyms = () => {
    const [backronymDb, setBackronymDb] = useState([]);

    useEffect(() => {
        // create a variable that holds our database details
        const database = getDatabase(firebase);
        // create a variable that makes a reference to our database
        const dbRef = ref(database);

        onValue(dbRef, (response) => {
            // here we use Firebase's .val() method to parse our database info the way we want it
            // here we're creating a variable to store the new state we want to introduce to our app
            const newState = [];

            // here we store the response from our query to Firebase inside of a variable called data.
            // .val() is a Firebase method that gets us the information we want
            const data = response.val();
            // data is an object, so we iterate through it using a for in loop to access each book name 
            for (let key in data) {
                // inside the loop, we push each item name to an array we already created inside the onValue() function called newState
                newState.push({ key: key, data: data[key] });
            }
            // then, we call setItems in order to update our component's state using the local array newState
            setBackronymDb(newState);
        });
    }, []);

    const handleTrash = (backronym) => {
        // console.log(backronym.key)
        // create a variable that holds our database details
        const database = getDatabase(firebase);
        // create a variable that makes a reference to the current liked backronym
        const dbRef = ref(database, `/${backronym.key}`);
        //remove it from the database
        remove(dbRef);
    };

    return (
        <ul>
            {backronymDb.map((backronym) => {
                return (
                    <li key={backronym.key}>
                        {backronym.data.map((letter) => {
                            return(`${letter[0].word} `)
                        })}
                        <button onClick={() => handleTrash(backronym)}>trash</button>
                    </li>
                )

            })}
        </ul>
    )
};

export default SavedBackronyms;