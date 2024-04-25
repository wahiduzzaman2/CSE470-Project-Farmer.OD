const express = require('express');
const app = express();
const cors = require('cors');
// const jwt = require('jsonwebtoken');
require('dotenv').config()
const stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY)
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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


  const foodCollection = client.db("FoodTODoor").collection("Foods");
  const userCollection = client.db("FoodTODoor").collection("Users");
  const myCartCollection = client.db("FoodTODoor").collection("MyCart");
  const purchaseCollection = client.db("FoodTODoor").collection("Purchase");

  
  app.get('/foods',  async (req, res) => {
    const result = await foodCollection.find().toArray();
    res.send(result);
  });

  app.post('/foods', async (req, res) => {
    const product = req.body;
    const result = await foodCollection.insertOne(product);
    res.send(result);
  })

  app.get('/foods/my-foods/:email', async (req, res) => {
    try {
      const FarmerEmail = req.params.email;
      const query = { FarmerEmail: FarmerEmail };
      const result = await foodCollection.find(query).toArray();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.delete('/foods/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await foodCollection.deleteOne(query);
    res.send(result);
});



  app.get('/users',  async (req, res) => {
    const result = await userCollection.find().toArray();
    res.send(result);
  });

  app.post('/users', async (req, res) => {
    const user = req.body;
    const result = await userCollection.insertOne(user);
    res.send(result);
  })

  app.get('/users/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const query = { email: email };
        const result = await userCollection.findOne(query);

        if (!result) {
            throw new Error("User not found");
        }
        res.json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

  app.post('/MyCart', async (req, res) => {
    const product = req.body;
    const result = await myCartCollection.insertOne(product);
    res.send(result);
  });

  app.get('/MyCart/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const query = { MyEmail: email };
        const result = await myCartCollection.find(query).toArray();

        res.json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

  app.put('/MyCart/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const update = { $set: { FoodQuantity: req.body.FoodQuantity } };
        const result = await myCartCollection.updateOne(query, update);
        res.json({ modifiedCount: result.modifiedCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  });

    app.delete('/MyCart/remove/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await myCartCollection.deleteOne(query);
      res.send(result);
  });

  app.post('/MyCart/removeMultiple', async (req, res) => {
    try {
        const itemIds = req.body.itemIds; // Array of item IDs to delete
        const query = { _id: { $in: itemIds.map(id => new ObjectId(id)) } };
        const result = await myCartCollection.deleteMany(query);
        res.json({ deletedCount: result.deletedCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  });

  // Endpoint to move items to order history and then delete from cart
  app.post('/MyCart/moveToOrderHistoryAndRemove', async (req, res) => {
    try {
        const itemIds = req.body.itemIds; // Array of item IDs to move to order history and delete

        // Fetch items to be moved to order history
        const query = { _id: { $in: itemIds.map(id => new ObjectId(id)) } };
        const itemsToMove = await myCartCollection.find(query).toArray();

        // Insert items into order history collection
        await purchaseCollection.insertMany(itemsToMove);

        // Delete items from cart collection
        const deleteResult = await myCartCollection.deleteMany(query);

        res.json({ movedCount: itemsToMove.length, deletedCount: deleteResult.deletedCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  });

  app.get('/orderHistory',  async (req, res) => {
    const result = await purchaseCollection.find().toArray();
    res.send(result);
  });

  app.get('/MyPurchaseHistory/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const query = { MyEmail: email };
        const result = await purchaseCollection.find(query).toArray();

        res.json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

  // create payment intent
  app.post('/create-payment-intent', async (req, res) => {
    const { price } = req.body;
    const amount = parseInt(price * 100);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card']
    });

    res.send({
      clientSecret: paymentIntent.client_secret
    })
  })

  
  app.post('/payment', async (req, res) => {
    const history = req.body;
    const result = await purchaseCollection.insertOne(history);
    res.send(result);
  });
  




    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

  }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('Food-portal is active')
  })
  
app.listen(port, () => {
    console.log(`Food-portal is running on port ${port}`);
  })
  