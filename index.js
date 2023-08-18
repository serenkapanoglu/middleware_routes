const express = require('express');
const app = express();
const itemsRoutes = require("./routes/items")
const ExpressError = require("./expressError")



app.use(express.json());
app.use("/items", itemsRoutes);

app.use(function (req, res, next) {
    return new ExpressError("Not Found", 404);
});

app.use((err, req, res, next) =>{
    res.status(err.status || 500);

    return res.json({
        error: err.message,
    });
});

app.get('/', (req, res) => {
    res.send('Hello World');
});
/*const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
*/