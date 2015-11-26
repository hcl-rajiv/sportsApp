/// <reference path="../../typings/mongoose/mongoose.d.ts" />

import {Router} from 'express';
import * as mongoose from 'mongoose';

mongoose.connect('mongodb://Mongosports:q5HAL_ohKNk0DHkwpL49pbbeXySnoERZ9e9IyjmJQHw-@ds054288.mongolab.com:54288/Mongosports');

const coach = Router();


/* GET coach from momgodb */
coach.get('/getCoach/:id?', function(req, res, next) { 
    var id: string = req.query.id;     
    
   // string service, int environment, int status, int dcId = 0
    var connection = new sql.Connection(config,function (err){
        
        if(err){
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.write("Got error :-( " + err);
            res.end("");
            return;
               }
        
          var request = new sql.Request(connection); // or: var request = connection.request(); 
          //query
        
           var query = "select  ResultJSON from [dbo].[PluginCurrentStatus] where PluginName = "+id;
          
            request.query(query, function(err, recordset) {
           
            if(err){
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.write("Got error :-( " + err);
            res.end("");
            return;
                   }
                  
            res.header('Content-Type: application/json');
            var response = [];             
            for (var i = 0; i < recordset.length; i++) {
                          response.push({ResultJSON:recordset[i].ResultJSON})           
            // res.json({ID:recordset[i].ID ,Type:recordset[i].Type});
         }
         res.send(response);
         res.end("");    
         
    }); 
    })
});

export default coach;
