import Read from "../pages/Read";
import HomePage from "../pages/HomePage";
import Tree from "../pages/Tree";
import Error from "../pages/Error";
import Main from "../pages/Main";

export const mainRoute = [{
    path: '/',
    component: Main,
    exact: true
}, {
    path: '/article/:articleID',
    component: Read
}, {
    path: '/homepage',
    component: HomePage,
    exact: true
}, {
    path: '/homepage/:authorID',
    component: HomePage,
    exact: true
}, {
    path: '/node/:nodeID',
    component: Tree
}, {
    path: '/error',
    component: Error
}]