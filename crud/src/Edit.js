import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { getEmpl, updateEmp } from "./api";

export const Edit = () => {
    const param = useParams();
    const [emp, setEmp] = useState({});

    const { register, handleSubmit, reset } = useForm();

    const history = useNavigate();

    const onSubmit = async data => {
        await updateEmp(data, param.id);
        history("/");
    }

    useEffect(() => {
        const fetchEmp = async () => {
            const e = await getEmpl(param.id);
            reset(setEmp(e));
        }
        fetchEmp();
    }, [reset, param.id]);

    return(
        <>
            <h3 className="container text-center mt-4">Edit Employee</h3>
            <div className="container my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">First name</label>
                        <input type="text" className="form-control" defaultValue={emp.firstname} {...register("firstname")} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Last name</label>
                        <input type="text" className="form-control" defaultValue={emp.lastname} {...register("lastname")} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emp_id" className="form-label">Employee ID</label>
                        <input type="text" className="form-control" defaultValue={emp.emp_id} {...register("emp_id")} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone number</label>
                        <input type="text" className="form-control" defaultValue={emp.phone} {...register("phone")} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>
            </div>
        </>
    )
}