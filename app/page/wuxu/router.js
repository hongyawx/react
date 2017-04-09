export default {
    path: 'wuxu',

    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('PAGE/wuxu').default)
            }, 'wuxu/index')
        }
    }

}
