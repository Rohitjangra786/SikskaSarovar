
import express from 'express';
const app = express();
const port = 8080;
app.get('/', (req, res) => res.send('Minimal Server OK'));
app.listen(port, () => console.log(`Minimal server running on port ${port}`));
