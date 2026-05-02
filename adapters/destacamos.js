const {ok,fail}=require('../services/response');
const WEB='destacamos';

async function publicar(payload){
  if(process.env.REAL_MODE!=='true'){
    return ok({accion:'publicar',web:WEB,url_anuncio:`https://simulado.local/$destacamos/anuncio/${payload?.anuncio?.id||Date.now()}`,mensaje:`Publicación simulada $destacamos`});
  }
  return fail(`Adaptador real pendiente de selectores verificados para $destacamos`,'adapter_pending');
}

async function renovar(payload){
  if(process.env.REAL_MODE!=='true'){
    return ok({accion:'renovar',web:WEB,mensaje:`Renovación simulada $destacamos`});
  }
  return fail(`Adaptador real pendiente de selectores verificados para $destacamos`,'adapter_pending');
}

module.exports={publicar,renovar};
