const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const PythonShell = require('python-shell');



// settings
app.set('port', process.env.PORT || 2000);
app.set('json spaces', 2);

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());





app.listen(app.get('port'), () => {
    // claves();
    console.log("Soy valoremooon");

    console.log(`Server on port ${app.get('port')}`);

 

    // Tier();
   
   
})



app.post('/gettier', async (req, res) =>{

  console.log("hola! :")
  console.log(req.body);
  var options = {
    mode: 'text',
      pythonPath: 'C:/Users/GuillermoManterolaRo/Miniconda3/python.exe',
    pythonOptions: ['-u'],
    scriptPath: '../bigadtatrabajo',
      // args: ["joblib","sklearn","pandas"]
    // args: ['Dragon,Ghost', 'Pressure,Telepathy',150,100,120,100,120,90]
        args: [req.body.type, req.body.Abilities, req.body.Hp, req.body.Attack, req.body.Defense, req.body.SpecialAttack, req.body.SpecialDefense, req.body.Speed]

 
  };


PythonShell.PythonShell.run('cliente.py', options, function (err, results) {
    if (err) 
      throw err;
    // Results is an array consisting of messages collected during execution
    //return(results);
    res.status(200).json(results)
  });
});
