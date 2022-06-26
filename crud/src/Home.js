import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEmp } from "./api";

export const Home = () => {
    const [emp, setEmp] = useState([]);

    useEffect(() => {
        const fetchEmp = async () => {
            const emp = await getEmp();
            setEmp(emp);
        }
        fetchEmp();
    }, []);

    return(
        <>
        <h3 className="container text-center my-4">Employee List</h3>
        <div className="container">
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Employee ID</th>
                        <th>Phone number</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emp.map(e => 
                            <tr key={e._id}>
                                <td>{e.firstname}</td>
                                <td>{e.lastname}</td>
                                <td>{e.emp_id}</td>
                                <td>{e.phone}</td>
                                <td><Link to={`/edit/${e._id}`} className="btn btn-primary">Edit</Link></td>
                                <td><Link to={`/delete/${e._id}`} className="btn btn-danger">Delete</Link></td>
                            </tr>    
                        )
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}