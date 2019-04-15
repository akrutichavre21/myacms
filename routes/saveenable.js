const Enable = require('../models/EnableSchema');

function projectdesc(req,res,next){
  const {body} = req;
  const {
    pid,
    userid
  }=body;
console.log(userid);
  Enable.find({pid:pid},(err,project)=>{
    if(err){
      res.status(404).send({
        success: false,
        message:'Error: Server error'});
    }
    else if(project.length===0)
    {
      res.status(400).send({
        success: false,
        message:'Project does not exist'});
    }
    else{
      var projEnable = new Enable;
      projEnable=project[0];
      if(projEnable.uid === 0)
      {

                projEnable.userid = userid;
                //console.log(projEnable);
                projEnable.save();
                res.status(200).send({
                  success:true,
                  message: 'Project user saved',
                  enablestatus: true});//redirect to edit page

      }
      else{

          res.status(200).send({
            success:true,
            message: 'Project already being edited',
            enablestatus: false});//pop up a message to user that it is being edited by someone else
      }
    }

  });
};

module.exports=projectdesc;
