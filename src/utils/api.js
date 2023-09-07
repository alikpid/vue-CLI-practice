const API = process.env.VUE_APP_API;

export const loginRequest = (user) => {
    return new Promise((resolve, reject) => {
        fetch(`${API}/login`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((result) => resolve(result.data.user_token))
            .catch((error) => {
                reject(error);
            });
    });
};

export const registrationRequest = (userData) => {
    return new Promise((resolve, reject) => {
        fetch(`${API}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.error) {
                    reject(result);
                } else {
                    resolve(result.data.user_token);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};