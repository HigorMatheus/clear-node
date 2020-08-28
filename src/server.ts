import express from 'express';

const app = express();

app.get('/',(req,res)=>{

    return res.json({ mensagem: 'tudo certo com ts' })
    
});

app.listen(3333);