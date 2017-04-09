export default {
    path: 'design',

    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('PAGE/design').default)
            }, 'design/index')
        }
    },
    childRoutes: [{
        path: 'button',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('PAGE/design/button').default)
            }, 'design/button')
        }
    },{
        path: 'input',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('PAGE/design/input').default)
            }, 'design/input')
        }
    },{
        path: 'table',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('PAGE/design/table').default)
            }, 'design/table')
        }
    }]
}
