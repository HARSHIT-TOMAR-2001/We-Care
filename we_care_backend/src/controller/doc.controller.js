const Doctor = require("../models/doc.model");

const register=async (req,res)=>{
  console.log(req.body);
  const  {name,contact_details,degree,specialization,city,address,email_id,password}=req.body;
  try {
    const doctorExist = await Doctor.exists({ email: email_id });
    if (doctorExist) {
      return res.status(400).send({ msg: "user already registered",status:0 });
    }
    //process.env.Salt
    // const hashedPassword = await bcrypt.hash(record.password, 10);
    var newDoctor = await Doctor.create({
      name: name,
      contact:parseInt(contact_details),
      degree:degree,
      specialization:specialization,
      city:city,
      address:address,
      email:email_id,
      password:password,
    });

    // const token = await generateToken(newUser);

    // newUser.token = token;
    console.log("Doctor created!");
    // res.json({
    //   message: "Doctor [" + name + "] registered successfully!",
    // });
    res.status(200).send(newDoctor);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function loginemail(req, res) {
    const record = req.body;
    const doctorExist = await   Doctor.findOne({ email: record.email,password:record.password }).lean();
  
    if (!doctorExist) {
      return res.status(400).json({ msg: "Invalid Credentials",status:0 });
    }
    else {
      return res.status(200).json({ msg: "user authenticated",status:1 });
    }
  

  }
  
  
const create_slot=async (req,res)=>{
  // console.log(req.body);
  // const  {name,contact_details,degree,specialization,city,address,email_id,slots}=req.body;
  try {
    const updatedSlot= await Doctor.updateOne({email:req.body.email_id},{$push:{slots:{start_time:req.body.start_time, end_time:req.body.end_time,max_limit:req.body.max_limit}}})
    if (!updatedSlot) {
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

module.exports={register,loginemail, create_slot}
 

