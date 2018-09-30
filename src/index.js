/**
 * index.js
 */
import _ from 'lodash';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['你好', 'WEBPACK'], ' ');
    var btn=document.createElement("button");
    btn.innerHTML="点我看控制台";
    btn.onclick=printMe;
    document.body.appendChild(btn);
    return element;
  }
  
  document.body.appendChild(component());