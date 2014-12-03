/**
 * Created by LocNT on 10/27/2014.
 */
var mysql = require('mysql');
var url = 'mysql://root:localhost:3306/euro_football?reconnect=true';

exports.getConnectionMySQL = function(){
    return connection = mysql.createConnection(url);
};
