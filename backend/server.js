const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simple request logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'EcoStay API',
      version: '1.0.0',
      description: 'API for EcoStay AI eco-friendly stays',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./server.js'], // files containing annotations
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

let ecoStays = [
  {
    id: 1,
    title: "Mountain View Cabin",
    description: "A cozy cabin in the Himalayas with solar power and organic meals.",
    location: "Uttarakhand, India",
    price: "$120/night"
  },
  {
    id: 2,
    title: "Beachside Eco-Villa",
    description: "Sustainable villa made from local materials, steps from the ocean.",
    location: "Goa, India",
    price: "$150/night"
  },
  {
    id: 3,
    title: "Forest Treehouse",
    description: "Unique treehouse stay surrounded by nature, perfect for adventure.",
    location: "Kerala, India",
    price: "$90/night"
  }
];

let nextId = 4;

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome message
 *     responses:
 *       200:
 *         description: Returns welcome message and available endpoints
 */
app.get('/', (req, res) => {
  res.status(200).json({ message: 'EcoStay API is running!', endpoints: ['GET /api/stays', 'GET /api/stays/:id', 'POST /api/stays', 'PUT /api/stays/:id', 'DELETE /api/stays/:id', 'GET /api/stays/search'] });
});

/**
 * @swagger
 * /api/stays:
 *   get:
 *     summary: Get all stays
 *     responses:
 *       200:
 *         description: List of stays
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
app.get('/api/stays', (req, res) => {
  res.status(200).json(ecoStays);
});

/**
 * @swagger
 * /api/stays/{id}:
 *   get:
 *     summary: Get a single stay
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Single stay object
 *       404:
 *         description: Stay not found
 */
app.get('/api/stays/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const stay = ecoStays.find(s => s.id === id);
  if (!stay) {
    return res.status(404).json({ error: 'Stay not found' });
  }
  res.status(200).json(stay);
});

/**
 * @swagger
 * /api/stays:
 *   post:
 *     summary: Create a new stay
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *               price:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created stay
 *       400:
 *         description: Missing fields
 */
app.post('/api/stays', (req, res) => {
  const { title, description, location, price } = req.body;
  if (!title || !description || !location || !price) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const newStay = {
    id: nextId++,
    title,
    description,
    location,
    price
  };
  ecoStays.push(newStay);
  res.status(201).json(newStay);
});

/**
 * @swagger
 * /api/stays/{id}:
 *   put:
 *     summary: Update an existing stay
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *               price:
 *                 type: string
 *     responses:
 *       204:
 *         description: Stay updated
 *       404:
 *         description: Stay not found
 *       400:
 *         description: Missing fields
 */
app.put('/api/stays/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description, location, price } = req.body;
  const index = ecoStays.findIndex(s => s.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Stay not found' });
  }
  if (!title || !description || !location || !price) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  ecoStays[index] = { id, title, description, location, price };
  res.status(204).send();
});

/**
 * @swagger
 * /api/stays/{id}:
 *   delete:
 *     summary: Delete a stay
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Stay deleted
 *       404:
 *         description: Stay not found
 */
app.delete('/api/stays/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = ecoStays.length;
  ecoStays = ecoStays.filter(s => s.id !== id);
  if (ecoStays.length === initialLength) {
    return res.status(404).json({ error: 'Stay not found' });
  }
  res.status(204).send();
});

/**
 * @swagger
 * /api/stays/search:
 *   get:
 *     summary: Search stays
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: Filtered stays
 */
app.get('/api/stays/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  const filteredStays = ecoStays.filter(stay => 
    stay.title.toLowerCase().includes(query) || 
    stay.description.toLowerCase().includes(query) || 
    stay.location.toLowerCase().includes(query)
  );
  res.status(200).json(filteredStays);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
