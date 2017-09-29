import {Element} from 'PolymerElement';
var mapsapi = require( 'google-maps-api' )( 'AIzaSyDBaAHebZTK7GkKP3JzxmRn1MoiyM4hhPE' );

export class PanoramaGoogle extends Element {
    static get properties() {
        return {}
    }

    static get template() {
        `
        `;
    }

    constructor() {
        super();
        console.log(mapsapi);

    }

    connectedCallback() {
        super.connectedCallback();

    }


}

customElements.define("panorama-google", PanoramaGoogle);

