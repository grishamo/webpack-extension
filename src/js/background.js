import '../img/icon128.png'
import '../img/icon48.png'
import '../img/icon16.png'

import productConfig from './productConfig.json';
import BackgroundFactory from "./background/BackgroundFactory";


let BGFactory = new BackgroundFactory( productConfig );

BGFactory.onBeforeRequest();



