import { useForm } from 'react-hook-form'; 
import { useNavigate } from 'react-router-dom';
import { createEmp } from './api';

export const Create = () => {
    const { register, handleSubmit } = useForm();
    const history = useNavigate();

    const onSubmit = async data => {
        await createEmp(data);
        history("/");
    }

    return (
        <>
        <h3 className="container text-center mt-4">Create Employee</h3>
        <div className="container my-5">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">First name</label>
                <input type="text" className="form-control" {...register("firstname")} required />
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Last name</label>
                <input type="text" className="form-control" {...register("lastname")} required />
            </div>
            <div className="mb-3">
                <label htmlFor="emp_id" className="form-label">Employee ID</label>
                <input type="text" className="form-control" {...register("emp_id")} required />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone number</label>
                <input type="text" className="form-control" {...register("phone")} required />
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
        </div>
        </>
    )
}