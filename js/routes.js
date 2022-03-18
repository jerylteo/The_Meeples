const initComp = {template: '<app-init></app-init>'}
const mainComp = {template: '<app-main></app-main>'};
const headerComp = {template: '<app-header></app-header>'};
const navComp = {template: '<app-nav></app-nav>'}

const routes = [
    {path: '/', component: mainComp},
];

const router = new VueRouter({routes});