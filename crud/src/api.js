export const getEmp = () => fetch("/").then(res => res.json());

export const createEmp = (emp) => fetch("/create", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(emp)
});

export const updateEmp = (emp, id) => fetch(`/edit/${id}`, {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(emp)
});

export const getEmpl = (id) => fetch(`/${id}`).then(res => res.json());

export const deleteEmp = (id) => fetch(`/delete/${id}`, {
    method: "DELETE",
    headers: {
        "Accept": "application/json"
    },
    body: null
});