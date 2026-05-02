function ok(data={}){return {ok:true,...data};}
function fail(mensaje,tipo='error',extra={}){return {ok:false,tipo,mensaje,...extra};}
module.exports={ok,fail};
