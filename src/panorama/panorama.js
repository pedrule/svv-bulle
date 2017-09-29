import {Element} from 'PolymerElement';
import { SphereGeometry } from 'three';
import { MeshBasicMaterial } from 'three';
import { Mesh } from 'three';

export class PanoramaBase extends Element {
    static get properties() {
        return {
            bulle: {
                type: Object,
                value: ()=>{
                    let geometry = new SphereGeometry(5000, 64,64);
                    let material = new MeshBasicMaterial();
                    let mesh = new Mesh(geometry, material);
                    mesh.scale.set(-1,1,1);
                    return mesh;
                },
                notify: true
            }
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


}

customElements.define("panorama-base", PanoramaBase);

