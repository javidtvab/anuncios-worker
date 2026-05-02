const {ok,fail}=require('../services/response');
const WEB='pasion';

async function publicar(payload){
  if(process.env.REAL_MODE!=='true'){
    return ok({accion:'publicar',web:WEB,url_anuncio:`https://simulado.local/$pasion/anuncio/${payload?.anuncio?.id||Date.now()}`,mensaje:`Publicación simulada $pasion`});
  }
  return fail(`Adaptador real pendiente de selectores verificados para $pasion`,'adapter_pending');
}

async function renovar(payload){
  if(process.env.REAL_MODE!=='true'){
    return ok({accion:'renovar',web:WEB,mensaje:`Renovación simulada $pasion`});
  }
  return fail(`Adaptador real pendiente de selectores verificados para $pasion`,'adapter_pending');
}

module.exports={publicar,renovar};
