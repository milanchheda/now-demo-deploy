const app = require('express')();

app.get('/', (req, res) => {
    res.send('Working on now.sh');
});

app.listen(3000);