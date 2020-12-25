import { connection } from "./../connection.js";

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM users", (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(res);
        });
    });
};
