import { authHeader } from "../util";

export const taskService = {
    getAll,
};

async function getAll() {
    const requestOptions = {
        method: "GET",
        headers: { 
            "Content-Type" : "application/json",
            ...authHeader()
        },
    };
    const response = await fetch("http://localhost:8080/api/v1/tasks", requestOptions);
    return responseHandler(response);
}

function responseHandler(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text); // need to document this
        if (!response.ok) {
            if (response.status === 401) {
                console.error("Logging out!");
                //window.location.reload(true); // basically resets the page to clear state and such
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}