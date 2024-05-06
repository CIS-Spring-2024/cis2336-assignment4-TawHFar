const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(body.bodyParser.urlencoded({extended:true}));


app.use(express.static('public'));

app.post('/submit-order',(req, res)=>{
    const {name, quantity, customer, pickupTime} = req.body;
    res.send('Order received for {customerName}')
});

app.listen(PORT,() => {
    console.log('Server is running at port ='+PORT);

})

