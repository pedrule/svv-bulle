import {Element} from 'PolymerElement';
import {WebGLRenderer} from 'three';
import SceneBase from '../scene/scene';
import CameraBase from '../camera/camera';


export class RendererBase extends Element {
    static get is() { return 'renderer-base'; }
    static get properties() {
        return {
            //given by svv-bulle
            canvas: {
                type: Object,
            },

            _renderer: {
                type: Object,
                computed: "_setRenderer(canvas)"
            },

            _camera:{
                type:Object
            },

            //given by svv-bulle
            height: {
                type: Number,
            },

            //given by svv-bulle
            width: {
                type: Number,
            }
        }

    }

    static get observers() {
        return [
            '_updateSize(height, width, _renderer)',
            '_render(_renderer, _camera)'
        ]
    }

    constructor() {
       super();
    }

    static get template() {
        return `
         <scene-base id="scene"></scene-base>
         <camera-base id="camera" height="[[height]]" width="[[width]]" on-camera-changed="_cameraReady"></camera-base>
        `;
    }

    /**
     * set the webgl renderer used to render our panorama
     * @computed _renderer
     * @param canvas
     * @returns {WebGLRenderer}
     * @private
     */
    _setRenderer(canvas) {
        let w =  new WebGLRenderer({alpha:true, premutipliedAlpha:false, precision : 'highp', antialias:false, canvas:canvas, context:canvas.getContext("webgl")});
        w.setClearColor( 0xffffff,0);
        w.setPixelRatio( window.devicePixelRatio );
        w.autoClear = false;
        w.shadowMap.enabled = true;
        w.domElement.style.position = 'absolute';
        return w;
    }

    /**
     * Function to update the size of the renderer if width or height changes
     * @observer
     * @param height
     * @param width
     * @private
     */
    _updateSize(height, width, _renderer) {
        if(height && width && _renderer)_renderer.setSize(width, height);
    }

    _cameraReady(event) {
        this._camera = event.detail.value;
    }

    _render(_renderer, _camera) {
        if(_renderer && _camera)
        {
            _renderer.render(this.$.scene.scene, _camera);
            requestAnimationFrame(this._render.bind(this, _renderer, _camera));
        }
    }

}

customElements.define(RendererBase.is, RendererBase);

