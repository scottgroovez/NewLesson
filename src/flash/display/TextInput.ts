import { Container } from 'pixi.js';
import type { Matrix, Renderer } from 'pixi.js';

type CanvasBounds = {
  top: number,
  left: number,
  width: number,
  height: number
}

const defaultInputStyles = {
  position: 'absolute',
  transformOrigin: '0 0',
  lineHeight: '1',
}

class TextInput extends Container {

  domInput!: HTMLInputElement;
  lastRenderer!: Renderer;
  canvasBounds!: CanvasBounds;
  resolution!: Renderer['resolution'];
  inputStyles!: HTMLInputElement['style'];

  constructor(styles?: Record<string, unknown>) {
    super();

    this.inputStyles = {
      ...this.inputStyles,
      ...defaultInputStyles,
      ...styles,
    };
    this.createDomInput();
    this.addListeners();
  }

  render(renderer: Renderer){
		super.render(renderer)
		this.renderInternal(renderer)
	}

  private createDomInput() {
    this.domInput = document.createElement('input');

    for(let key in this.inputStyles){
			this.domInput.style[key] = this.inputStyles[key];
		}
  }

  private addListeners() {
    this.on('added', this.onAdded);
    this.on('removed', this.onRemoved);
  }

  private onAdded() {
    document.body.appendChild(this.domInput);
  }

  private onRemoved() {
		document.body.removeChild(this.domInput);
	}

  private renderInternal(renderer: Renderer){
		this.resolution = renderer.resolution;
		this.lastRenderer = renderer
		this.canvasBounds = this.getCanvasBounds()
		//if(this._needsUpdate()) {
			this.update();
    //}
	}

  private getCanvasBounds(): CanvasBounds {
		let rect = this.lastRenderer.view.getBoundingClientRect()
		let bounds = {top: rect.top, left: rect.left, width: rect.width, height: rect.height}
		bounds.left += window.scrollX
		bounds.top += window.scrollY
		return bounds
	}

  private update(){
		this.updateDOMInput()
		//if(this._substituted) this._updateSurrogate()
		//this._updateBox()
	}

  private updateDOMInput(){
		if(!this.canvasBounds)
			return

		this.domInput.style.top = (this.canvasBounds.top || 0)+'px';
		this.domInput.style.left = (this.canvasBounds.left || 0)+'px';
		this.domInput.style.transform = this.pixiMatrixToCSS(this.getDOMRelativeWorldTransform());
		//this.domInput.style.opacity = this.worldAlpha;
		//this._setDOMInputVisible(this.worldVisible && this._dom_visible)

    /*
		this._previous.canvas_bounds = this.canvasBounds
		this._previous.world_transform = this.worldTransform.clone()
		this._previous.world_alpha = this.worldAlpha
		this._previous.world_visible = this.worldVisible
    */
	}

  private getDOMRelativeWorldTransform() {
		let canvas_bounds = this.lastRenderer.view.getBoundingClientRect()
		let matrix = this.worldTransform.clone();

		matrix.scale(this.resolution, this.resolution);
		matrix.scale(canvas_bounds.width/this.lastRenderer.width,
    canvas_bounds.height/this.lastRenderer.height);
		return matrix;
	}

  private pixiMatrixToCSS(m: Matrix) {
		return 'matrix('+[m.a,m.b,m.c,m.d,m.tx,m.ty].join(',')+')'
	}

}

export { TextInput };