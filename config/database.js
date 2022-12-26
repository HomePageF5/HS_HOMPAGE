var mysql = require('mysql');

module.exports = function () {
    return {
        init: function () {
        return mysql.createConnection({
            host: '127.0.0.1',
            port: '3001', 
            user: 'gahyeon', //이 DB에서 사용하고 있는 user의 이름
            password: 'rkgus123',   //이 DB에서 사용하고 있는 user의 password
            database: 'nodejs'    //내가 생성한 데이터베이스 이름
        })
        },
    
    test_open: function (con) {
        con.connect(function (err) {
            if (err) {
            console.error('mysql connection error :' + err);
            } else {
            console.info('mysql is connected successfully.');
            }
        })
    }
}
};