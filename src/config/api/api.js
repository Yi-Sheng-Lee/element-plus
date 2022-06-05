const url = import.meta.env.DEV
    ? "http://192.168.69.174/mssp/api/1.0"
    : "http://192.168.69.174/mssp/api/1.0"

export const AUTH = {
    LOGIN: url + "/login",
}
