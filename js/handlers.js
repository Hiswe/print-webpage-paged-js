import {Handler, registerHandlers} from './paged.esm.js';

class myHandler extends Handler {

    afterPageLayout(pageElement, page, breakToken){
        // console.log(pageElement);
    }
}

registerHandlers(myHandler);
