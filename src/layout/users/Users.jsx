import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "../../components/user/User";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    console.log(users);
    return (
        <div className="w-fit m-auto  ">
            <h1 className="text-center font-bold text-3xl mt-10 ">Home</h1>
                <p className="text-center font-bold text-xl mt-4">Users {users.length}</p>
            <div className="grid grid-cols-3 gap-8 my-10">
                {
                users.map(( coffe ) => <User key={coffe._id} coffe={coffe} users={users} setUsers={setUsers}></User>)
                }
            </div>
        </div>
    );
};

export default Users;