const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
app.use(express.static('public'));

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT} :DDDDD`));

app.get('/', (req, res)=>
    res.sendFile(path.join(__dirname, './views/home.html'))
)
app.get('/register', (req, res)=>
    res.sendFile(path.join(__dirname, './views/register.html'))
)
app.get('/login', (req, res)=>
    res.sendFile(path.join(__dirname, './views/login.html'))
)
