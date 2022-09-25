const mongosse = require('mongoose');

const getConnection = async () => {
    try{
        const url = 'mongodb://db_user:JuRElKmns7h3TAUr@ac-psfyf9i-shard-00-00.q1pdhzz.mongodb.net:27017,ac-psfyf9i-shard-00-01.q1pdhzz.mongodb.net:27017,ac-psfyf9i-shard-00-02.q1pdhzz.mongodb.net:27017/intentarioIUD?ssl=true&replicaSet=atlas-rmepl6-shard-0&authSource=admin&retryWrites=true&w=majority';
        await mongosse.connect (url);
        console.log('conexion exitosa');
    }
    catch(error){
        console.log(error);
    };
}

module.exports = {
    getConnection,
}