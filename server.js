const express=require('express');
const {getAdapter}=require('./services/router');
const {ok,fail}=require('./services/response');
const app=express();
app.use(express.json({limit:'30mb'}));
function auth(req,res,next){
 const key=process.env.API_KEY;
 if(!key) return next();
 if(req.headers['x-api-key']!==key) return res.status(401).json(fail('API_KEY inválida','auth'));
 next();
}
app.get('/health',(req,res)=>res.json(ok({service:'anuncios-worker-final',time:new Date().toISOString()})));
app.post('/publicar',auth,async(req,res)=>{
 try{const adapter=getAdapter(req.body?.configuracion?.web);res.json(await adapter.publicar(req.body));}
 catch(e){res.json(fail(e.message||'Error publicando','worker'));}
});
app.post('/renovar',auth,async(req,res)=>{
 try{const adapter=getAdapter(req.body?.configuracion?.web);res.json(await adapter.renovar(req.body));}
 catch(e){res.json(fail(e.message||'Error renovando','worker'));}
});
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log(`worker en puerto ${PORT}`));
