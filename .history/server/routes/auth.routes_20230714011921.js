import express from 'express'
import authCtrl from '../controllers/auth.controller' 
const router = express.Router()
router.route('/auth/signin') 
    .post(authCtrl.signin)
When the Express app gets a POST request at '/auth/signin', it executes 
the signin controller function.
router.route('/auth/signout') 
.get(authCtrl.signout)
export default router