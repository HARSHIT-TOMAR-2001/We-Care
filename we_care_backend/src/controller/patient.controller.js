const Patient = require("../models/patient.model");

const register=async (req,res)=>{
  console.log(req.body);
  const  {firstname,lastname,contact_details,age,gender,email,password}=req.body;
  console.log("mzaa agya bro");
  try {
    const patientExist = await Patient.exists({ email: email });
    if (patientExist) {
      return res.status(400).send({ msg: "Patient already registered",status:0 });
    }

    var newPatient = await Patient.create({
      firstname: firstname,
      lastname:lastname,
      contact:parseInt(contact_details),
      age:parseInt(age),
      gender:gender,
      email:email,
      password:password,
    });


    console.log("Patient created!");
    
    res.status(200).send(newPatient);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function loginemail(req, res) {
    const record = req.body;
    const PatientExist = await   Patient.findOne({ email: record.email,password:record.password }).lean();
  
    if (!PatientExist) {
      return res.status(400).json({ msg: "Invalid Credentials",status:0 });
    }
    else {
      return res.status(200).json({ msg: "user authenticated",status:1 });
    }
  

  }
  

module.exports={register,loginemail}
 

