const util = require('util');
const dbconn = require('./dbconn');

module.exports = {
    findAllMessages: async function() {
        const conn = dbconn();
        // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, data, (error, results, field) => error ? reject(error):resolve(rows))); 
        const query = util.promisify(conn.query).bind(conn);
        try {
            return await query(
                "select * from guestbook order by no desc",
                []
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    insert: async function(emaillist) {
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);
        try {
            return await query(
                "insert into emaillist values(null, ?, ?, ?)",
                Object.values(emaillist)
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    }
}