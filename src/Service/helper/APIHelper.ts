import axios from "axios";

import ENV from "@application/api/envProvider";

export const API = axios.create({
    baseURL: ENV.server.name,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
