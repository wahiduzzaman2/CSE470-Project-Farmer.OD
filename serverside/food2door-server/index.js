const express = require('express');
const app = express();
const cors = require('cors');
// const jwt = require('jsonwebtoken');
require('dotenv').config()
// const stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY)
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ib8fgeo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

  const foodCollection = client.db("FoodTODoor").collection("Foods");

  
  app.get('/foods',  async (req, res) => {
    const result = await foodCollection.find().toArray();
    res.send(result);
  });


    const database = client.db("ProjectStudent001");
    const studentCollection = database.collection("Student");
    const employeeCollection = database.collection("Employee");
    const jobCollection = database.collection("Job");
    

    app.post('/student/signup', async (req, res) => {
      const result = await studentCollection.insertOne(req.body);
      res.send(result);
    });

    app.get('/student/signin', async (req, res) => {
      const { email, password } = req.query;
      try {
          // Query the database for the student with the provided email and password
          const student = await studentCollection.findOne({ email, password });
          if (!student) {
              // If no student found, send an error response
              return res.status(404).json({ message: "Student not found" });
          }
          // If student found, send the student data in the response
          res.json(student);
      } catch (error) {
          console.error("Error signing in:", error);
          res.status(500).json({ message: "Internal server error" });
      }
    });

    app.get('/jobs',  async (req, res) => {
      const result = await jobCollection.find().toArray();
      res.send(result);
    });


    app.post('/employee/signup', async (req, res) => {
      const result = await employeeCollection.insertOne(req.body);
      res.send(result);
    });

    app.get('/employee/signin', async (req, res) => {
      const { email, password } = req.query;
      try {
          // Query the database for the student with the provided email and password
          const student = await employeeCollection.findOne({ email, password });
          if (!student) {
              // If no student found, send an error response
              return res.status(404).json({ message: "Student not found" });
          }
          // If student found, send the student data in the response
          res.json(student);
      } catch (error) {
          console.error("Error signing in:", error);
          res.status(500).json({ message: "Internal server error" });
      }
    });





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('Student-portal is active')
  })
  
app.listen(port, () => {
    console.log(`Student-portal is running on port ${port}`);
  })
  