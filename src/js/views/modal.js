import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Modal = () => {
    const navigate = useNavigate();
    const { id } = useParams();  // agarra el id del contacto desde los parámetros de la URL
    const { store, actions } = useContext(Context);  
 
    console.log("Rendering ContactList with contacts:", store.contacts)

    const returnHome = () => {
        navigate("/");  // regresa al home después de la acción
    };

    const handleDelete = () => {
        actions.handleDelete(id);  // Pasa el id del contacto a eliminar
        console.log(`Contacto eliminado: ${id}`);
        navigate("/");  
    };

    return (
        <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex="-1" role="dialog" id="modalChoice">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-3 shadow">
                    <div className="modal-body p-4 text-center">
                        <h5 className="mb-0">Are you sure?</h5>
                        <p className="mb-0">Do you want to delete the contact?</p>
                    </div>
                    <div className="modal-footer flex-nowrap p-0">
                        <button
                            type="button"
                            onClick={handleDelete}  
                            className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end"
                        >
                            <strong>Yes</strong>
                        </button>
                        <button
                            type="button"
                            onClick={returnHome} 
                            className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0"
                            data-bs-dismiss="modal"
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
