import Ajax from 'robe-ajax'
let rootPath = 'http://localhost:3000';
export default function ajax({
                                 url,
                                 method = 'get',
                                 data = {}
                             }) {

    url = rootPath + url;
    return Ajax.ajax({
        url,
        method: method,
        data: data,
        processData: method === 'get',
        contentType: 'application/json',
        dataType: 'JSON',
    })
}