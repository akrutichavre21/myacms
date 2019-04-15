const Version = require('../models/ProjectVersionSchema');
const Project = require('../models/ProjectSchema');
const Contributor = require('../models/ContributorSchema');
const Reviewer = require('../models/ReviewerSchema');

function projectdesc(req,res,next){
  const {body} = req;
  const {
    pid,
    versionNum
  }=body;

  Version.find({projectname:pid,versionNum:versionNum},(err,project)=>{
    if(err){
      res.status(404).send({
        success: false,
        message:'Error: Server error'});
    }
    else{
      Project.find({_id:pid},(err,p)=>{
        if(err){
          res.status(404).send({
            success: false,
            message:'Error: Server error'});
        }
        else {
          var projectreviewer;
          var contributors = new Array();
          var contributornames = new Array();
          contributors = p[0].contributors;
          Reviewer.find({_id:p[0].reviewer},(err,prreviewer)=>{
            if(err){
              res.status(404).send({
                success: false,
                message:'Error: Server error'});
            }
            else {
              projectreviewer = prreviewer[0].reviewer;
              var x=0;
              for(i=0;i<contributors.length;i++)
              {
                Contributor.find({_id:contributors[i]},(err,c)=>{
                  if(err){
                    res.status(404).send({
                      success: false,
                      message:'Error: Server error'});
                  }
                  else {
                    x=x+1;
                    contributornames.push(c[0].name);
                    console.log(x);
                    if(x===contributors.length)
                    {
                      res.status(200).send({
                        success:true,
                        message: 'Project found',
                        description: project[0].description,
                        pname:p[0].pname,
                        reviewer:projectreviewer,
                        contributors:contributornames
                      });
                    }
                  }
                });
              }
            }
          });

        }
      });

    }
  });
};

module.exports=projectdesc;
