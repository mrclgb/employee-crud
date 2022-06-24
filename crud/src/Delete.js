import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteEmp } from "./api";


export const Delete = () => {
    const param = useParams();
    const history = useNavigate();

    const submit = async () => {
        const id = param.id;
        await deleteEmp(id);
        history("/");
    }

    return(
        <>
            <h3 className="container text-center my-4">Delete Employee</h3>
            <p className="text-center mb-4">Are you sure you want to delete </p>
            <div className="container text-center">
                <button onClick={submit} className="btn btn-primary px-4 mx-3">Yes</button>
                <Link to={'/'} className="btn btn-danger px-4 mx-3">Cancel</Link>
            </div>
        </>
    )
}