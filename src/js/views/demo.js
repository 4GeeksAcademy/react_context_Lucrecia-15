import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/demo.css";


export const Demo = () => {
    const a = "Full Name";
    const b = "Email";
    const c = "Phone";
    const d = "Address";

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => { //recibe los datos del formulario
        e.preventDefault();
        actions.addContact(formData);
        navigate("/");
    };

    return (
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="list-group d-md-flex">
                {store.demo.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="col-md-11 m-5"
                            style={{ background: item.background }}>
                            <h2 className="title d-md-flex justify-content-center">Add a new Contact</h2>
                            <label htmlFor="name" className="form-label">{a}</label>
                            <input
                                type="text"
                                className="form-control d-md-flex"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder={a}
                            />
                            <label htmlFor="email" className="form-label">{b}</label>
                            <input
                                type="email"
                                className="form-control d-md-flex"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder={b}
                            />
                            <label htmlFor="phone" className="form-label">{c}</label>
                            <input
                                type="number"
                                className="form-control d-md-flex"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder={c}
                            />
                            <label htmlFor="address" className="form-label">{d}</label>
                            <input
                                type="text"
                                className="form-control d-md-flex"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder={d}
                            />
                        </div>
                    );
                })}
                <button type="submit" className="btn btn-success col-md-11 m-5 mt-0">
                    Save
                </button>
                <Link to="/">
                    <span className="link m-5">Or get back to contacts list</span>
                </Link>
            </div>
        </form>
    );
};