import { routerPathUser } from "./routerpath";



interface MenuItem {
    name: string;
    url: string;
    icon: string;
    path: string;
}

const userMenuList: MenuItem[] = [
    { name: "ขอยื่นจดทะเบียน", icon: "fas fa-file-signature", url: routerPathUser.Regis , path: routerPathUser.Regis },
    { name: "ออกจากระบบ", icon: "fas fa-sign-out-alt", url: "/logout", path: "/logout" }
]
const adminMenuList: MenuItem[] = [
    { name: "ผุ้ใช้งาน", icon: "fas fa-user", url: "/account", path: "/account" },
    { name: "รายการผู้ยื่นจดทะเบียน", icon: "fas fa-tasks", url: "/project", path: "/project" }
]

export { adminMenuList, userMenuList }

