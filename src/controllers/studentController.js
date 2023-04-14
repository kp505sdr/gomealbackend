const StudentDetails=require("../models/studentModels")



//create student data
exports.createStudent = async (req, res, next) => {
 

    const student= await StudentDetails.create(req.body)
    res.status(201).json({
      success:true,
      student
    })
 
};

//get all student
exports.getAllStudents= async(req,res)=>{
    
  const students=await StudentDetails.find()
    res.status(200).json({
      success:true,
      students
    })
}
// update student details

exports.putStudents=async(req,res)=>{

  let student = await StudentDetails.findById(req.params.id);
  if(!student){
      return res.status(404).json({
      success:false,
      message:"Student not found"
    })
  }
  student=await StudentDetails.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
  res.status(200).json({
    success:true,
    student
  })
}
//delete student
exports.deleteStudent=async(req,res)=>{
   const student=await StudentDetails.findById(req.params.id);
   if(!student){
    return res.status(400).json({
      success:false,
      message:"Student not found"
    })
   }
  await student.remove();
  res.status(200).json({
    success :true,
    message:"Student Deleted Successfully"
  })
}