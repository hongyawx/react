import ajax from 'UTIL/ajax'
/**
 * 对应后端的 /user/* 所有 API
 */
class User {

    query({ author = '', pageIdx = 1, quantity = 10, userId } = {}) {
        let url = '/users/';

        if (userId) {
            url += userId
        } else {
            url = `${url}?author=${author}&pageIdx=${pageIdx}&quantity=${quantity}`
        }

        return ajax({ url })
    }

    add(userBody) {
        return ajax({
            method: 'post',
            url: '/user',
            body: userBody
        })
    }

    update(data) {
        let id = data.id;
        delete data.id;
        return ajax({
            method: 'put',
            url: `/users/${id}`,
            data: JSON.stringify(data)
        })
    }

    del(id) {
        return ajax({
            method: 'delete',
            url: `/users/${id}`
        })
    }
}

// 实例化后再导出
export default new User()
