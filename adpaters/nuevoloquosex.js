const {ok,fail}=require('../services/response');
const WEB='nuevoloquosex';

async function publicar(payload){
  if(process.env.REAL_MODE!=='true'){
    return ok({
      accion:'publicar',
      web:WEB,
      url_anuncio:`https://simulado.local/${WEB}/anuncio/${payload?.anuncio?.id||Date.now()}`,
      mensaje:`Publicación simulada ${WEB}`
    });
  }
  return fail(`Adaptador real pendiente de selectores verificados para ${WEB}`,'adapter_pending');
}

async function renovar(payload){
  if(process.env.REAL_MODE!=='true'){
    return ok({
      accion:'renovar',
      web:WEB,
      mensaje:`Renovación simulada ${WEB}`
    });
  }
  return fail(`Adaptador real pendiente de selectores verificados para ${WEB}`,'adapter_pending');
}

module.exports={publicar,renovar};
