/**
 * index.js
 */
import {cube} from './math.js';

console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV!=='production'){
  console.log("看来我们正在开发模式！");
}

function component() {
    var element = document.createElement('pre');
    element.innerHTML=[
      "hello,webpack",
      "5 cubed is equal to "+cube(5)
    ].join('\n\n');
    return element;
  }
  
  let element =component();
  document.body.appendChild(element);
  if(module.hot){
    module.hot.accept('./print.js',function(){
      console.log("Acceptin the updated printMe module!");
      document.body.removeChild(element);
      element = component(); 
      document.body.appendChild(element);
    });
  }