	import flash.display.DisplayObject;
	import flash.display.Loader;
	import flash.display.LoaderInfo;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.net.URLRequest;
	import flash.system.ApplicationDomain;
	import flash.system.LoaderContext;
	import whizz.animation.MovieClipSimpleAnimator;

import { 
	DisplayObject,
	Loader,
	Sprite,
} from 'pixi.js';

import { MovieClip } from '@pixi/animate';

	public class WzUnitTestSample extends Sprite
	{
		public const pLoader: Loader; 
		private const pLoadListener:LoaderInfo; 
		private const pLoaderContext:LoaderContext;
		private const pSkin:ApplicationDomain
		private const pWorms:MovieClip;
		private const pAnimator:MovieClipSimpleAnimator
		private static const pIgnoreFrameEventFromGoToAndStop:boolean
		
		/*
		Load in Media (swf)
		*/
		public function WzUnitTestSample()
		{
			super();
			trace("Started")
			pIgnoreFrameEventFromGoToAndStop = false
			// load assets
			pSkin = ApplicationDomain.currentDomain
			pLoader = new Loader();
			pLoadListener = pLoader.contentLoaderInfo;
			pLoadListener.addEventListener(Event.COMPLETE, fLoadComplete)
			pLoaderContext = new LoaderContext(false, pSkin, null);
			pLoaderContext.applicationDomain = pSkin;
			var tRequest:URLRequest = new URLRequest("media/images/flash/n650EA1media.swf")
			pLoader.load(tRequest, pLoaderContext);
		}
		
		private function fGetDisplayObject(tName:String):DisplayObject
		{
			if (pSkin.hasDefinition(tName))
			{
				var C:Class = pSkin.getDefinition(tName) as Class;
				var tInstance:Object = new C();
				
				if (tInstance is DisplayObject)
				{
					return tInstance as DisplayObject;
				}
				
			}
			return null
		}
		private function fLoadComplete(e:Event):void 
		{
			pWorms = fGetDisplayObject("n650EA1_payoff2") as MovieClip
			addChild(pWorms)
			pWorms.x = stage.stageWidth / 2
			pWorms.y = stage.stageHeight / 2
			pAnimator = new MovieClipSimpleAnimator(pWorms,20)
			pAnimator.fSetCallback(fRunIt)
			addEventListener(Event.ENTER_FRAME, fAction)
			fRunIt()
		}
		private function fAction(e:Event):void 
		{
			pAnimator.fAction()
		}
		private function fRunIt(tAnimator:MovieClipSimpleAnimator=null):void {
			pAnimator.fGoto(1,true)
		}
		public static function fGoToFrame(tClip:MovieClip, tFrame:*, tPlay:Boolean = false):void
		{
			pIgnoreFrameEventFromGoToAndStop = true;
			if (tPlay)
			{
				tClip.gotoAndPlay(tFrame);
			}
			else
			{
				tClip.gotoAndStop(tFrame);
			}
			pIgnoreFrameEventFromGoToAndStop = false;
		}
	
	}