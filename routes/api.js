import fs from 'fs';
import path from 'path';
import { Router } from 'express';

const router = Router();
const TEST_DATA={
  "table": [
    {"title":"Fireball","probability":0.2,"description":"You cast fireball centered on yourself."},
    {"title":"Lickitung","probability":0.2,"description":"Your tongue doubles in size for the next minute."},
    {"title":"Tree Boi","probability":0.2,"description":"You turn into a tree for the next minute."},
    {"title":"Invisibility","probability":0.2,"description":"You cast invisibility on all creatures within 30ft of you."},
    {"title":"GI Issues","probability":0.2,"description":"You fart every time you speak for the next hour."}
  ],
  "title": "Vimak & Krag Table That's Better Than Shady's",
  "description":"Dummy data table cause thomas is a huge cuck lord and won't give us the surge table",
  "owner":"Vimak & Craig",
  "id":"1236541789"
};
router.get('/',(req,res)=>{
  // const data = JSON.parse(fs.readFileSync( path.resolve( __dirname, '..', ) ));
  res.json(TEST_DATA);
});

export default router;
