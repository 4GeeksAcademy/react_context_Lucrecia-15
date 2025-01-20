const getState = ({ getStore, setStore, getActions }) => {

	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
			],
			contacts: [] // Array para almacenar los contactos
		},
		actions: {
			traerContacto: async () => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/lucrecia/contacts', {
					headers: { 'Content-Type': 'application/json' },
				})
				console.log(response);
				if (!response.ok) {
					const actions = getActions()
					actions.crearUsuario()
				} else {
					const data = await response.json()
					console.log(data);
					setStore({ contacts: data.contacts })
				}


			}, crearUsuario: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/lucrecia", { method: "POST" })
				console.log(response);
				const data = await response.json()
				getActions().traerContacto()
				console.log(data);

			}, addContact: async (contactData) => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/lucrecia/contacts", {
					method: "POST",
					body: JSON.stringify(contactData),
					headers: {
						"Content-Type": "application/json",
					}
				})
				console.log(response);

				const store = getStore();
				const newContact = { ...contactData, id: Date.now() }; // Crear con ID único
				console.log("Agregando contacto:", newContact);

				// Actualiza el store con el nuevo contacto
				setStore({
					...store,
					contacts: [...store.contacts, newContact]
				});


			}, handleDelete: async (id) => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/lucrecia/contacts/${id}`, {
					method: "DELETE",

				})
				if (response.ok) {
					console.log(`Contact with ID ${id} deleted`);
					const store = getStore();
					// Filtra los contactos para eliminar el que tiene el ID que coincida
					const updatedContacts = store.contacts.filter(contact => contact.id !== parseInt(id));
					setStore({ contacts: updatedContacts })
				} else {
					console.error("Error deleting contact", response.status);
				};

			}, Edith: async (contactData, id, navigate) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/lucrecia/contacts/${id}`, {
						method: "PUT",
						body: JSON.stringify(contactData),
						headers: {
							"Content-Type": "application/json",
						},
					});

					if (response.ok) {
						const store = getStore();

						// Actualizar los contactos en el store localmente
						getActions().traerContacto();
						navigate("/");

					} else {
						console.error("Error updating contact", response.status);
					}
				} catch (error) {
					console.error("Error en la solicitud PUT:", error);
				}
			},
		}
	};
};

export default getState;
