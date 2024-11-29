import { Option } from "./types";

export const VNC_SERVER_URL:string = "http://localhost:8080/vnc.html";

export const VNC_SERVER_URL_LIST:Option[] = [
    {
        name: "RVIZ",
        status: "Active",
        url: "http://localhost:8080/vnc.html?autoconnect=true",
    },
    {
        name: "MVSIM",
        status: "Active",
        url: "http://localhost:8082/vnc.html?autoconnect=true",
    }
]
