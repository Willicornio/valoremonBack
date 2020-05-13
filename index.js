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

    var options = {
        mode: 'text',
        //  pythonPath: 'C:/Users/GuillermoManterolaRo/Miniconda3/python.exe',
        pythonOptions: ['-u'],
        scriptPath: '../bigadtatrabajo',
           args: ['Hey ', 'mabuel']
        //args: ['Dragon,Ghost', 'Pressure,Telepathy',150,100,120,100,120,90]
      };


    PythonShell.PythonShell.run('prueba.py', options, function (err, results) {
        if (err) 
          throw err;
        // Results is an array consisting of messages collected during execution
        console.log('results: %j', results);
      });

    // const spawn = require("child_process").spawn;


    // // const process = spawn("python", ["../bigadtatrabajo/cliente.py", 'Dragon,Ghost', 'Pressure,Telepathy',150,100,120,100,120,90])
    
    // const process = spawn("python", ["../bigadtatrabajo/prueba.py", 'Dragon,Ghost', 'Pressure,Telepathy'])

    
    //     process.stdout.on("data", data =>{
    //         console.log(data.toString());
    //        resolve(data.toString()); // <------------ by default converts to utf-8
  
   
   
})


//     return new Promise((resolve, reject) => {

//         try {
//             if (_.isEmpty(regressionModel)) {
//                 console.log('calling python');
//                 regressionModel = pynode.call('predictPokemon','Dragon,Ghost','Pressure,Telepathy',150,100,120,100,120,90);
//             }
//             resolve(regressionModel);
//         } catch (err) {
//             console.log(err);
//             reject('failed to load housing variables');
//         }
//     })
//         .then(response => res.send(response))
//         .catch(err => res.err(err));
// })


// // return new Promise((resolve, reject) =>{
//      process.stdout.on("data", data =>{
//          console.log(data.toString());
// //         resolve(data.toString()); // <------------ by default converts to utf-8

// //     })
// //     process.stderr.on("data", reject)
// // })





//   #pokemonAMeter = pd.DataFrame({"Types":['Dragon,Ghost'],
//   #                             "Abilities":["Pressure,Telepathy"],
//    #                            "Tier":["No"],
//    ##                            "Tier":["No"],
//    ###                            "Tier":["No"],
//       #                         "HP":[150],
//        #                        "Attack":[100],
//         #                       "Defense":[120],
//          #                      "Special Attack":[100],
//           #                     "Special Defense":[120],
//            #                    "Speed":[90]
//             #                   });
