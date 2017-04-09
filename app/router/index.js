import page from './page.ignore';
export default {
    path: '/',
    component: require('PAGE/root').default,

    indexRoute: {
        component: require('PAGE/home').default
    },
    childRoutes: [
        ...page,
        { path: '*', component: require('PAGE/404').default }
    ]
}