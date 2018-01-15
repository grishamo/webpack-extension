
import ContentFactory from './content/ContentFactory';
import productConfig from './productConfig.json';

let contentFactory = new ContentFactory( productConfig );

contentFactory.onDOMContentLoaded();

