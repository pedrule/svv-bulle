import {Element} from 'PolymerElement';
import {Scene} from 'three';
import {PanoramaGoogle} from '../panorama-google/panorama-google';
import {PanoramaBase} from '../panorama/panorama';


export class SceneBase extends Element {
    static get properties() {
        scene: {
            type: Object
        }
    }

    static get template() {
        return  `
        <div id="meshContainer">
            <panorama-base id="panorama" on-bulle-changed="_addBulleToScene"></panorama-base>
        </div>   
        `;
    }

    constructor() {
        super();
        this.scene = new Scene();
    }

    connectedCallback() {
        super.connectedCallback();
    }

    _addBulleToScene(event) {
        this.scene.add(event.detail.value);
    }
}

customElements.define("scene-base", SceneBase);

