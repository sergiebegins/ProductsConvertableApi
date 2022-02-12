import * as express from 'express';
import {logger} from './middleware/logger'
import reqGet from "./router/index";
const path = require('path');
const app = express();
const router = express.Router();
const { engine } = require('express-handlebars');



app.use(express.static(path.join(__dirname, "public")));
app.use("/styles/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/styles/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));

app.engine('.hbs', engine({ extname: 'hbs'}));
app.set('view engine', '.hbs');


app.use(logger);


app.use('/', router);

router.get('/', reqGet);
router.get('/products', reqGet);
router.get('/productDetails/:productId([0-9]{1,})', reqGet);

app.listen(3000);