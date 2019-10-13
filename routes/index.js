import path from 'path';
import { Router } from 'express';
import api from './api';

const router = Router();

router.use('/api', api);

router.get( '/', ( req, res ) => {
  res.sendFile( path.resolve(__dirname,'..','build','index.html') );
} );

export default router;