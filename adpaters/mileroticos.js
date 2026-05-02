const {ok,fail}=require('../services/response');
const WEB='mileroticos';

async function publicar(payload){
  if(process.env.REAL_MODE!=='true'){
    return ok({accion:'publicar',web:WEB,url_anuncio:`https://simulado.local/$mileroticos/anuncio/${payload?.anuncio?.id||Date.now()}`,mensaje:`Publicación simulada $mileroticos`});
  }
  return fail(`Adaptador real pendiente de selectores verificados para $mileroticos`,'adapter_pending');
}

async function renovar(payload){
  if(process.env.REAL_MODE!=='true'){
    return ok({accion:'renovar',web:WEB,mensaje:`Renovación simulada $mileroticos`});
  }
  return fail(`Adaptador real pendiente de selectores verificados para $mileroticos`,'adapter_pending');
}

module.exports={publicar,renovar};
