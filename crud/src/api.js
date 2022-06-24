export const getEmp = () => fetch("http://localhost:4000/").then(res => res.json());

export const createEmp = (emp) => fetch("http://localhost:4000/create", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(emp)
});

export const updateEmp = (emp, id) => fetch(`http://localhost:4000/edit/${id}`, {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(emp)
});

export const getEmpl = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json());

export const deleteEmp = (id) => fetch(`http://localhost:4000/delete/${id}`, {
    method: "DELETE",
    headers: {
        "Accept": "application/json"
    },
    body: null
});