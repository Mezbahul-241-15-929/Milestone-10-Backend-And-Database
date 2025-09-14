const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
// middleware
app.use(cors());
app.use(express.json());

//Mongodb
// User: Mezbahul
// Pass: 2A3NW9ZuLLtGXaGu


// const uri = 'mongodb://127.0.0.1:27017';
const uri = "mongodb+srv://mezbahul:2A3NW9ZuLLtGXaGu@cluster0.1jlx3rd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        const usersCollection = client.db('usersdb').collection('users');


        app.post('/users', async(req, res) =>{
            console.log("data in the server",req.body)
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser);
            res.send(result);
        })

        // app.post('/users',async (req,res)=>{
        //     const user1= req.body;
        //     console.log("data in the server",user1);
        // })


        // Connect the client to the server	(optional starting in v4.7)
        
        // Send a ping to confirm a successful connection
        //await client.db("admin").command({ ping: 1 });
        //console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
