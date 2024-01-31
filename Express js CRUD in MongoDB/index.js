mongoose = require("mongoose");
express = require("express");

app = express()

port = 3000;

app.listen(port, () => {console.log(`running successfully on port ${port}`)})

mongoose.connect('mongodb://localhost:27017/ddn').then(()=>{console.log('connected')
}).catch((error)=>console.log(error));

employeeschema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    mobile : {
        type : Number,
        required: true
    },
    age : {
        type: Number,
        required : true
    },
    salary: {
        type : Number,
        required : true
    },
    married :{
        type : Boolean,
        required : true
    },
    date : {
        type : Date,
        default: Date.now
    }
})






// employee = new mongoose.model("employee", employeeschema)


// createEmp = new employee({
//     name: 'Ramakant',
//     mobile : 7897894561,
//     age : 30,
//     salary : 50000,
//     married : true,

// }

// )
// createEmp.save();
// console.log("data inserted successfully");




















// employee = new mongoose.model('employee', employeeschema)
// createEmp = async() => {
//     try{
//         createE1 = new employee(
//             {
//                 name: "ramakant",
//                 mobile: 7897897898,
//                 age : 25,
//                 salary : 500000,
//                 married: true
//             }
//         )
//          createE2 = new employee(
//             {name: "ram",
//             mobile: 7897897898,
//             age : 25,
//             salary : 500000,
//             married: true}
//          )
//          createE3 = new employee(
//             {name: "sanju",
//             mobile: 7897897898,
//             age : 25,
//             salary : 500000,
//             married: false}
//          )
        
//          createE4 = new employee(
//             {name: "sanju kumar",
//             mobile: 7897897898,
//             age : 25,
//             salary : 400000,
//             married: true}
//          )

//          createE5 = new employee(
//             {name: "gulshan kumar",
//             mobile: 7897897898,
//             age : 25,
//             salary : 400000,
//             married: true}
//          )
//          empD = await employee.insertMany([createE1, createE2, createE3, createE4, createE5]);
//          console.log(empD);}
//          catch(error)
//          {
//             console.log(error);
//          }
//     }
//     createEmp();

















// Employee = new mongoose.model('employee', employeeschema);


// readData = async () => {
//     try {
       
//         // data = await Employee.find({married: true});
//         // data = await Employee.find({married: true}).select({ name: 1}).limit(4);
//         // data = await Employee.findOne();
//         // data = await Employee.find({married: true}).select({mobile:0}).limit(6).sort({ salary:-1});
// data = await Employee.find({married: {$not: {$eq: false}}})
//         console.log(data);
//     } catch (error) {
       
//         console.log(error);
//     }
// };


// readData();






// employee = new mongoose.model('employee', employeeschema)

// updateData = async(name) => {
//     try{
//         data = await employee.updateOne({name:name},
//         // data = await employee.findByIdAndUpdate({_id:id},
//             {$set : {age : 55550000}})
//     }
//     catch (error)
// {
//     console.log(error)
// }}
// updateData('bill rrrr sanju')


// employee = new mongoose.model('employee', employeeschema)
// updateDocument = async(xyz) =>{
//     try{
//         data =await employee.updateOne({salary: xyz},
//             {
//                 $set:{
//                     // mobile: 9999999999
//                     name: "sanju samson"
//                 }
//             })
//             console.log(data);
//     }
//     catch(error){console.log(error)}
// }
// updateDocument(500000)




// employee = new mongoose.model('employee', employeeschema)
// deleteData = async(name) => {
//     try{
//         data = await employee.daleteMany({name:name});
//         console.log(data);
//     }
//     catch(error){console.log(error)}
// }
// deleteData('sanju samson')





employee = new mongoose.model('employee', employeeschema);

deleteData = async (name) => {
    try {
        // Use 'deleteMany' to delete documents that match the specified condition
        const data = await employee.deleteMany({ name: name });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// Call the 'deleteData' function with a specific name to delete matching documents
deleteData('sanju samson');
