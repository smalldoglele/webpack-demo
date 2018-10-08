/**
 * index.js
 */
import {cube} from './math.js';

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