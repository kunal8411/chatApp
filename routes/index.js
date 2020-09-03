const express= require('express');
const router= express.Router();
const app= express();

const home_controller= require('../controllers/home_controller');

router.get('/', home_controller.home);



module.exports= router;