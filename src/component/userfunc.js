import React,{useState, useEffect} from 'react';


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        const url = 'https://jsonplaceholder.typicode.com/users';

        const fetchItems = async () =>{
            try{
                const response = await fetch (url);
                const json = await response.json();
                console.log(json);
                setUsers(json);
            } catch(error){
                console.log('error:',error)
            }
        }

        fetchItems();
    },[])




    return (
        <div >
            <center>
            <h1>Users </h1>
           {users.map(each_user =>(
               <h4 key={each_user.id}>
                   {each_user.name}
                   </h4>
           ))}
            </center>
        </div>
    )
}

export default Users;
