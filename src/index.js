/**
 * index.js
 */
import _ from 'lodash';
import './style.css';
import Icon from './icon.ico';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['你好', 'WEBPACK'], ' ');
    element.classList.add("hello");
    element.classList.add("web-font");
    //将图片加入到现有的div
    var myIcon=new Image();
    myIcon.src=Icon;
    element.appendChild(myIcon);
    console.log(Data);
    return element;
  }
  
  document.body.appendChild(component());