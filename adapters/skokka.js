const {ok,fail}=require('../services/response');
const WEB='skokka';

async function publicar(payload){
  if(process.env.REAL_MODE!=='true'){
    return ok({accion:'publicar',web:WEB,url_anuncio:`https://simulado.local/$skokka/anuncio/${payload?.anuncio?.id||Date.now()}`,mensaje:`Publicación simulada $skokka`});
  }
  return fail(`Adaptador real pendiente de selectores verificados para $skokka`,'adapter_pending');
}

async function renovar(payload){
  if(process.env.REAL_MODE!=='true'){
    return ok({accion:'renovar',web:WEB,mensaje:`Renovación simulada $skokka`});
  }
  return fail(`Adaptador real pendiente de selectores verificados para $skokka`,'adapter_pending');
}

module.exports={publicar,renovar};
