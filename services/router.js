const adapters={
  destacamos:require('../adapters/destacamos'),
  pasion:require('../adapters/pasion'),
  mileroticos:require('../adapters/mileroticos'),
  skokka:require('../adapters/skokka'),
  slumi:require('../adapters/slumi'),
  nuevoloquosex:require('../adapters/nuevoloquosex')
};
function getAdapter(web){
  if(!web||!adapters[web]) throw new Error(`Web no soportada: ${web}`);
  return adapters[web];
}
module.exports={getAdapter};
