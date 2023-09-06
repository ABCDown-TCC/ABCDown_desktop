const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Importe o módulo axios

const app = express();
app.use(cors());

app.get('/api/cep/:cep', async (req, res) => {
    const cep = req.params.cep;
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        const response = await axios.get(apiUrl); // Use axios.get() aqui
        const data = response.data; // Acesse os dados usando response.data
        res.json(data);
    } catch (error) {
        console.error('Error fetching data from ViaCEP:', error);
        res.status(500).json({ error: 'An error occurred while fetching data from ViaCEP.' });
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
