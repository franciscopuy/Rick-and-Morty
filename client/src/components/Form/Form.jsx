import { useState } from "react";
import Validation from "./Validation";

const Form = ({ login }) => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [property]: value
        })

        Validation({ ...form, [property]: value }, errors, setErrors)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(form);
    }

    return (
        <div className="login-page">
            <div className="form">
                <h1 className="title-form">Rick And Morty App</h1>
                <form onSubmit={handleSubmit} o className="register-form">
                    <input placeholder="username" className="formInput" type="text" name="email" value={form.email} onChange={handleChange} autoComplete='off' />
                    {errors.email && <p className="error">{errors.email}</p>}
                    <input placeholder="password" className="formInput" type="password" name="password" value={form.password} onChange={handleChange} />
                    {errors.password && <p className="error">{errors.password}</p>}
                    <button className="buttonLogin" type="submit">Login</button>
                </form>
            </div>
        </div>

    );
}

export default Form
