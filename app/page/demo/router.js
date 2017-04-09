export default {
    path: 'demo',

    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('PAGE/demo').default)
            }, 'demo/index')
        }
    },
    childRoutes: [{
        path: 'webpack',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('PAGE/demo/webpack').default)
            }, 'demo/webpack')
        }
    },{
        path: 'react',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('PAGE/demo/reactjs').default)
            }, 'demo/react')
        }
    }]
}
