const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const users=[
    {id:1, name:'Mezbahul',email:'abcd@gmail.com'},
    {id:2, name:'Shahin',email:'efdf@gmail.com'},
    {id:3, name:'Ridoy',email:'werrr@gmail.com'},
]

app.get('/users', (req, res) => {
  res.send(users);
  

})

app.post('/users', (req, res) => {
  console.log('users post method');
  console.log(req.body);
  const newUser= req.body;
  newUser.id= users.length+1;

  users.push(newUser);

  res.send(newUser);


})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})