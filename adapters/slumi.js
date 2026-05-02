const {ok,fail}=require('../services/response');
const WEB='slumi';

async function publicar(payload){
  if(process.env.REAL_MODE!=='true'){
    return ok({accion:'publicar',web:WEB,url_anuncio:`https://simulado.local/$slumi/anuncio/${payload?.anuncio?.id||Date.now()}`,mensaje:`Publicación simulada $slumi`});
  }
  return fail(`Adaptador real pendiente de selectores verificados para $slumi`,'adapter_pending');
}

async function renovar(payload){
  if(process.env.REAL_MODE!=='true'){
    return ok({accion:'renovar',web:WEB,mensaje:`Renovación simulada $slumi`});
  }
  return fail(`Adaptador real pendiente de selectores verificados para $slumi`,'adapter_pending');
}

module.exports={publicar,renovar};
