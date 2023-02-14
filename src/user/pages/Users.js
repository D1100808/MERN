import React from "react";
import UsersList from "../components/UsersList";

function Users(){
    const USERS = [{
        id:'u1',
        name:'Tim Cook',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgCojFg-TUab2Z1_mxpaid2vweBrZ6QVoDbOx5aF_Kg&s',
        places: 3
    }];

    return <UsersList items={USERS}/>
}
export default Users;