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
    component: DashBoard,
    hidden:false
  },
  {
    path: "/functions",
    name: "FUNCTIONS",
    icon: "fas fa-user-friends",
    component: Functions,
    hidden:false
  },
  {
    path: "/roles",
    name: "ROLES",
    icon: "fas fa-users-cog",
    component: TableList,
    hidden:false
  },
  {
    path: "/users",
    name: "USERS",
    icon: "fas fa-user",
    component: Users,
    hidden:false
  },
  {
     path: "/manageapplications",
     name: "MANAGE APPLICTIONS",
     icon: "fas fa-layer-group",
     component: Icons,
     hidden:false
  },
  {
    path: "/log-out",
    name: "LOGOUT",
    userName:"ADMIN",
    icon: "fas fa-sign-out-alt",
    component: Maps,
    hidden:false
  }
];

export default dashboardRoutes;



