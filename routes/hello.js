import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {

    console.log('hello?')
    res.send("hi!")
})

export default router;