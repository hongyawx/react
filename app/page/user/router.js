export default {
    path: 'user',

    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('PAGE/user').default)
            }, 'user/index')
        }
    }
}
