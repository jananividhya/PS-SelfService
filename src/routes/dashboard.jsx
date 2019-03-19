import DashBoard from "views/Dashboard/Dashboard";
import Functions from "../views/Typography/Typography";
import TableList from "views/TableList/TableList";
import Users from "views/UserProfile/UserProfile";
import Icons from "views/Icons/Icons";
import Maps from "views/Maps/Maps";

const dashboardRoutes = [
  {
    path: "/smalltalk",
    name: "SMALL TALK",
    icon: "fas fa-comment-alt",
    component: null,
    hidden:false
  },
  {
    path: "/functions",
    name: "FUNCTIONS",
    icon: "fas fa-user-friends",
    component: TableList,
    hidden:false
  },
  {
    path: "/roles",
    name: "ROLES",
    icon: "fas fa-users-cog",
    component: Functions,
    hidden:false
  },
  {
    path: "/users",
    name: "USERS",
    icon: "fas fa-user",
    component:Icons,
    hidden:false
  },
  {
     path: "/manageapplications",
     name: "MANAGE APPLICTIONS",
     icon: "fas fa-layer-group",
     component:  Maps,
     hidden:false
  },
  {
    path: "/log-out",
    name: "LOGOUT",
    userName:"ADMIN",
    icon: "fas fa-sign-out-alt",
    component: Users,
    hidden:false
  },
  {
    path: "/",
    name: "",
    icon: "",
    component: DashBoard,
    hidden:true
  },
];

export default dashboardRoutes;



