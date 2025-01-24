import React,{useEffect, useState} from "react";
import userData from "../API/GetAction";
import { toast } from "react-toastify";

const UserTable = () =>{

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {        
            try{
            const data = await userData();
            setData(data);
        }catch(err){
            toast.err("Data Errors",err);
        }
        }

        fetchData();

    },[]);

    return(
        <div>
            <h1>User Data</h1>
            <table align="center"  border="1" color="green">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length>0 ? (
                        data.map((user) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>                          
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    )  : (  
                            <tr>
                            <td colSpan="4">No Users Found</td>
                            </tr>
                ) }
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;
