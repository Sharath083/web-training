let headers=new Headers()

const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:8080', // specify your allowed origins
  credentials: true, // enable set cookie
};

app.use(cors(corsOptions));

app.post('/user/signup', (req, res) => {
  res.send('User signed up');
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });
  
const proxyUrl = 'http://localhost:8080/';
const targetUrl = 'http://your-target-server.com/api';
fetch(proxyUrl + targetUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // your request payload
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));


// headers.append('Content-Type', 'application/json');

// headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
// headers.append('Access-Control-Allow-Credentials', 'true');

// headers.append('GET', 'POST', 'OPTIONS');
// headers.append("Access-Control-Allow-Origin","$http_origin")
// headers.append('Content-Type','application/json')
// headers.append('session-id','ZmExMWYzNzAtMmExYy00N2ZmLThkZjktNTU0YzYwZGI5MDI5Ly9nb3ZpbmRhc2FpLnNAbWFya2V0c2ltcGxpZmllZC5jb20vL2dvdmluZA==')


// async function getData(){
//     document.getElementById('getData').innerHTML="In Function"
//     try{
//         const response=await fetch('https://cryptic-headland-94862.herokuapp.com/http://localhost:8080/order/summary',{
//             method :'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'session-id' : 'ZmExMWYzNzAtMmExYy00N2ZmLThkZjktNTU0YzYwZGI5MDI5Ly9nb3ZpbmRhc2FpLnNAbWFya2V0c2ltcGxpZmllZC5jb20vL2dvdmluZA=='
//             }
//         })
//         document.getElementById('getData').innerHTML="Fetched Data from Api"
//         if(response.ok){
//             const data=await response.json();
//             document.getElementById('getData').innerHTML=data
//             console.log(data);
//         }else{
//             console.error('Error:', await response.text());
//         }
//     }catch(error){
//         console.error('Error:', error);
//     }
// }

function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  } 
} 