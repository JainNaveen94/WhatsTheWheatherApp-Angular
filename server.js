//Install express server

const express = require('express');
const app = express();

// Serve only the static files form the dist directory

app.use(express.static(__dirname + '/dist/WhatsTheWheatherApp'));

app.all('*', function (req, res) {
    res.status(200).sendFile(path.join(__dirname + '/dist/WhatsTheWheatherApp/index.html'));
});

// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 4200)