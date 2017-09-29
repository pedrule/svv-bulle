

import { Element } from 'PolymerElement';
import { RendererBase } from "./renderer/renderer";


export class SvvBulle extends Element {
    static get is() { return 'svv-bulle'; }
    static get properties() {
      return {
        panoID: {
          type: String,
          value: 'tLUgkFT3FXsAAAQvxcs9gQ'
        },

        height: {
            type: Number,
            value: ()=>{
                return window.innerHeight
            }
        },

        width: {
          type: Number,
          value: ()=>{
              return window.innerWidth
          }
        },

        canvas: {
            type: Object
        }
      };
    }

    static get template() {
        return `
            <style>
                #paint{
                    overflow: hidden;
                    z-index: 10;
                    position: absolute;
                    pointer-events: none;
                }
            </style>
            <canvas id="paint"></canvas>
            <renderer-base id="renderer" canvas="[[canvas]]" height="[[height]]" width="[[width]]">
            </renderer-base>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        /*
        We lazy load the threejs library
        Once it did, we call the function which create the
         */
        /*import(/!* webpackChunkName: "three" *!/ './renderer/renderer.js').then( RendererBase => {
            this._initChildRenderer(RendererBase);
        }).catch(error => 'An error occurred while loading the component');*/
        this.$.paint.style.height = this.height+'px';
        this.$.paint.style.width = this.width+'px';
        this.canvas =  this.$.paint;
    }
}

customElements.define(SvvBulle.is, SvvBulle);