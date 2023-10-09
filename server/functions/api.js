const express = require("express");
const serverless= require("serverless-http");

const app= express();
const router = express.Router();

let records = [];
let email1 ='';
let name ='';
router.get("/", (req,res) =>{
    res.json({
        hello: "hi!"
      });
} );

router.get("/add", (req,res) =>{
    res.send('add run');
 } );

 router.post("/sign", (req,res) =>{
    // res.send('app sign');
    email1 = req.body.email;
    name = req.body.name;

   
    
    const signer1 = {
        emailAddress: req.body.email,
        name: name,
        order: 0,
      };
      
      const signer2 = {
        emailAddress: "litvil77@gmail.com",
        name: "Jill",
        order: 1,
      };
    
      const signingOptions = {
        draw: true,
        type: true,
        upload: true,
        phone: false,
        defaultType: "draw",
      };
      
      const fieldOptions = {
        dateFormat: "DD - MM - YYYY",
      };
      
      // Upload a local file
      const file = fs.createReadStream("consent.pdf");
    
    const data = {
        title: "Consent Agreement with Thames.",
        subject: "The Consent agreement we talk about",
        message: "This is to give your consent to Cognitive assessment ,please sign below . Let me know if you have any questions.",
        signers: [ signer1, signer2 ],
        ccEmailAddresses: [
          "lawyer2@gmail.com",
        ],
        files: [ file],
        metadata: {
          "custom_id": 1234,
          "custom_text": "CA #9",
        },
        signingOptions,
        testMode: true,
      };
      // console.log(req.body.email);
        console.log(data);
          const result = signatureRequestApi.signatureRequestSend(data);
        result.then(response => {
          console.log(response.body);
        }).catch(error => {
          console.log("Exception when calling Dropbox Sign API:");
          console.log(error.body);
        });
 } );
 
 
app.use('/.netlify/functions/api',router);
// app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);