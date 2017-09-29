import {Element} from 'PolymerElement';
import {PerspectiveCamera} from 'three';
import {Vector3} from 'three';


export class CameraBase extends Element {
    static get properties() {
        return {
            height: {
                type: Number
            },

            width: {
                type: Number
            },

            camera: {
                type: Object,
                computed: '_setCamera(width, height)',
                notify: true
            },
        }
    }

    static get template() {
        `
        `;
    }

    constructor() {
        super();

    }

    connectedCallback() {
        super.connectedCallback();
    }

    _setCamera(width, height) {
        if(width && height) {
            let c = new PerspectiveCamera(66.6666666666666666666666666666666666666667, width/height, 1, 15000);
            c.position.set( 0, 0, 0);
            c.target = new Vector3( 0, 0, 0 );
            return c;
        }

    }
}

customElements.define("camera-base", CameraBase);

