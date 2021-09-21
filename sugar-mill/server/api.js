let Grower = require('./models/Growers')
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next) => {
   console.log('middleware');
   next();
})

router.route('/Growers').get((request,response)=>{

    dboperations.getGrowers().then(result => {
       response.json(result[0]);
    })
});

router.route('/Growers/:growerId').get((request,response)=>{

    dboperations.getGrowerCaneLoads(request.params.growerId).then(result => {
       response.json(result[0]);
    })
});

router.route('/Tracts').get((request,response)=>{
   dboperations.getTracts().then(result => {
      response.json(result[0]);
   })
});

router.route('/Tracts/:id/:LastUpdatedBy/:TractId/:TractName').put((request, response) => {
   let id = request.params.id
   let LastUpdatedBy = request.params.LastUpdatedBy;
   let TractId = request.params.TractId
   let TractName = request.params.TractName
   //console.log(request.params);
   dboperations.changeTract(id, LastUpdatedBy, TractId, TractName).then(result => {
      response.json(result[0]);
   })
});



var port = process.env.PORT || 5001;
app.listen(port);
console.log('Order API is runnning at ' + port);



