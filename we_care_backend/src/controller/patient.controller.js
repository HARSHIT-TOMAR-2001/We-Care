const Doctor = require("../models/doc.model");
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


  const book_slot=async (req,res)=>{
    // console.log(req.body);
    const slot_id=req.body.slot_id
    const doc_email=req.body.doc.email
    const patient_email=req.body.patient.email

    const  {name,contact_details,degree,specialization,city,address,email_id,slots}=req.body;
    try {
      const doctor=await Doctor.findOne({email:doc_email})

      if(doctor.slot_id.curr_limit<doctor.slot_id.max_limit){
        const updatedSlot= await Doctor.updateOne({email:doc_email, slots:slot_id},{$inc:{curr_limit:1}})
        const updatedPatient=await Patient.updateOne({email:patient_email}, {$push:{slots:{start_time:req.body.start_time, end_time:req.body.end_time}}})
      }
      else{
        return res.send({msg:"All slots are booked."})
      }
      // const updatedSlot= await Doctor.updateOne({email:req.body.email_id},{$push:{slots:{start_time:req.body.start_time, end_time:req.body.end_time,max_limit:req.body.max_limit}}})
      if (!updatedSlot || updatedPatient) {
        return res.status(400).send({ msg: "cannot update slot",status:0 });
      }
      //process.env.Salt
      // const hashedPassword = await bcrypt.hash(record.password, 10);
  
      
      // const token = await generateToken(newUser);
  
      // newUser.token = token;
      // console.log("Doctor created!");
      // res.json({
      //   message: "Doctor [" + name + "] registered successfully!",
      // });
      res.status(200).send(updatedSlot);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  

module.exports={register,loginemail,book_slot}
 

