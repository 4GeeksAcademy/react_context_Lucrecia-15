import React, { useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context);


	return (
		<div className="ContactCard col-md-11 m-5 px-auto">
			<div className="contact m-5 d-md-flex justify-content-between">
				<div className="list_Contact">
					<a className="pull-left" href="#"> <img className="image" class="rounded-circle" src="https://bootdey.com/img/Content/user_1.jpg" alt="" /></a>
				</div>
				<div className="info lh-1">
					<h4>Jonathan Smith</h4>
					<p className="text-muted"><i class="fa-solid fa-location-dot"></i>2700 Pergamino</p>
					<p className="text-muted"><i class="fa-solid fa-phone"></i>(2477)15456845</p>
					<p className="text-muted"><i class="fa-solid fa-envelope"></i>jonathansmith@gmail.com</p>
				</div>
				<div className="pull-right btn-group-sm">
					<a href="#" className="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
						<i className="fa fa-pencil"></i>
					</a>
					<button className="button">
						<a href="#" className="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
							<i className="fa fa-close"></i>
						</a>
					</button>
				</div>
			</div>
			<hr></hr>

			{store.contacts.map((contact) => (
				<div key={contact.id}>
					<div className="contact m-5 d-md-flex justify-content-between">
						<div className="list_Contact">
							<a className="pull-left" href="#">
								<img className="image rounded-circle" src="https://bootdey.com/img/Content/user_1.jpg" alt="" />
							</a>
						</div>
						<div className="info lh-1">
							<h4>{contact.name}</h4>
							<p className="text-muted"><i className="fa-solid fa-location-dot"></i>{contact.address}</p>
							<p className="text-muted"><i className="fa-solid fa-phone"></i>{contact.phone}</p>
							<p className="text-muted"><i className="fa-solid fa-envelope"></i>{contact.email}</p>
						</div>
						<div className="pull-right btn-group-sm">
						<Link to={`/edith/${contact.id}`}>
							<button className="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
								<i className="fa fa-pencil"></i>
							</button>
						</Link>
							<Link to={`/modal/${contact.id}`}>
								<button className="Delete btn btn-danger tooltips">
									<i className="fa fa-close"></i>
								</button>
							</Link>
						</div>
					</div>
					<hr />
				</div>
			))}
		</div>
	);
};


