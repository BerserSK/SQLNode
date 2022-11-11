const express = require('express')
const app = express();

app.get('/', function(req, res){
    res.send('Hello World!')
})

app.listen(3000)

// Conexion

let mysql = require('mysql')

let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'lenguajes',
    user: 'root',
    password: ''
})

conexion.connect(function(err){
    if(err){
        console.error('Error de conexion'+ err.start);

        return;
    }

    console.log('Conectado con el identificador' + conexion.threadId);
})

conexion.query('SELECT * FROM codigo WHERE nombre_cod="Ruby"', function(error,results,fields){
    if(error)
    throw error;
    results.forEach(result => {
        console.log(result)
    });
})

conexion.query('SELECT count(*) FROM programa', function(error,results,fields){
    if(error)
    throw error;
    results.forEach(result => {
        console.log(result)
    });
})

conexion.query('SELECT * FROM codigo WHERE nombre_cod="Ruby";', function(error,results,fields){
    if(error)
    throw error;
    results.forEach(result => {
        console.log(result)
    });
})

conexion.query('SELECT programa.FK_id_lenguaje, codigo.nombre_cod FROM programa inner JOIN codigo ON programa.FK_id_lenguaje = codigo.id_lenguaje ORDER BY `codigo`.`nombre_cod`',function(error,results,fields){
    if(error)
    throw error;
    results.forEach(result => {
        console.log(result)
    });
})

conexion.query('SELECT empresa.FK_emp_pro, programa.nombre_pro FROM empresa inner JOIN programa ON empresa.FK_emp_pro = programa.id_programa ORDER BY `programa`.`nombre_pro`',function(error,results,fields){
    if(error)
    throw error;
    results.forEach(result => {
        console.log(result)
    });
})

conexion.end();