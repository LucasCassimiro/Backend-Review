const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
            return {
                bd_string: 'mongodb+srv://lucas:lucas@cluster0.uzzdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: 'minhachave',
                jwt_expires: '365d'
            }

        case 'hml':
            return {
                bd_string: 'mongodb+srv://lucas:lucas@cluster0.uzzdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: 'minhachave',
                jwt_expires: '365d'
            }

        case 'prod':
            return {
                bd_string: 'mongodb+srv://lucas:lucas@cluster0.uzzdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: 'minhachave',
                jwt_expires: '365d'
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();