import axios from "axios";

export default axios.create({
    baseURL: "https:https://9c96-103-106-239-104.ap.ngrok.io",
    headers: {"ngrok-skip-browser-worning": "true"}
});