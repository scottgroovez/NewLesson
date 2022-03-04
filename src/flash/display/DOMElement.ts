import { Container } from './Container';
import type { Matrix, Renderer } from '../types/';

type CanvasBounds = {
  top: number,
  left: number,
  width: number,
  height: number
}

const defaultStyles = {
  position: 'absolute',
  transformOrigin: '0 0',
  lineHeight: '1',
  fontFamily: 'helvetica, sans-serif',
  fontSize: '20px',
}

class DOMElement extends Container {

  domElement!: HTMLElement;
  lastRenderer!: Renderer;
  canvasBounds!: CanvasBounds;
  resolution!: Renderer['resolution'];
  domElementStyles!: HTMLElement['style'];

  constructor(tagName: string, styles?: Record<string, unknown>) {
    super();

    this.domElementStyles = {
      ...this.domElementStyles,
      ...defaultStyles,
      ...styles,
    };
    this.createDomElement(tagName);
    this.addListeners();
  }

  render(renderer: Renderer){
		super.render(renderer)
		this.renderInternal(renderer)
	}

  private createDomElement(tagName: string) {
    this.domElement = document.createElement(tagName);
    this.setStyles({})
  }

  public setStyles(styles: Record<string, unknown>) {
    this.domElementStyles = {
      ...this.domElementStyles,
      ...styles,
    }
    for(let key in this.domElementStyles){
			this.domElement.style[key] = this.domElementStyles[key];
		}
  }

  private addListeners() {
    this.on('added', this.onAdded);
    this.on('removed', this.onRemoved);
  }

  private onAdded() {
    document.body.appendChild(this.domElement);
  }

  private onRemoved() {
		document.body.removeChild(this.domElement);
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
		this.updatedomElement()
		//if(this._substituted) this._updateSurrogate()
		//this._updateBox()
	}

  private updatedomElement(){
		if(!this.canvasBounds)
			return

		this.domElement.style.top = (this.canvasBounds.top || 0)+'px';
		this.domElement.style.left = (this.canvasBounds.left || 0)+'px';
		this.domElement.style.transform = this.pixiMatrixToCSS(this.getDOMRelativeWorldTransform());
		//this.domElement.style.opacity = this.worldAlpha;
		//this._setdomElementVisible(this.worldVisible && this._dom_visible)

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

export { DOMElement };