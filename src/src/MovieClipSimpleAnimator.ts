	import flash.display.FrameLabel;
	import flash.display.MovieClip;
	import flash.utils.getTimer;
	import whizz.WzUnitTestSample;
	
	class MovieClipSimpleAnimator
	{
		private var _pClip:MovieClip
		private var pPlaying:Boolean
		private var pNextFrame:int
		private var pStartFrame:int
		private var pNextFrameTime:int
		private var pFrameLength:int // milliseconds per frame
		private var pCallback:Function
		private var pCallbackFrame:*
		private var pEndFrame:*
		private var _pLooping:Boolean
		private var pNumLoops:int
		
		public function MovieClipSimpleAnimator(tClip:MovieClip, tFrameRate:Number = 12, tLooping:Boolean = false)
		{
			_pClip = tClip
			tClip.stop()
			pFrameRate = tFrameRate
			_pLooping = tLooping
			pPlaying = false
			// if the first frame has a "play" label, play it automatically
			if (tClip.currentFrameLabel && tClip.currentFrameLabel.indexOf("play") >= 0)
			{
				pPlaying = true
				// if it also says "loop", loop it.
				if (tClip.currentFrameLabel.indexOf("loop") >= 0)
				{
					_pLooping = true
					pNumLoops = -1
				}
			}
			pStartFrame = 1
		
		}
		
		private function fGetLabeledFrame(tName:String):int
		{
			for (var i:int = 0; i < pClip.currentLabels.length; i++)
			{
				var tLabel:FrameLabel = pClip.currentLabels[i]
				if (tLabel.name == tName)
				{
					return tLabel.frame
				}
			}
			return -1
		}
		
		public function fAction():void
		{
			if (pPlaying)
			{
				var tTime:int = getTimer()
				//trace("MC Time:" + tTime)
				while (pPlaying && tTime > pNextFrameTime)
				{
					fNextFrame()
						//trace("gone to frame " + pClip.currentFrame)
				}
			}
		}
		
		public function fSetCallback(tCallback:Function, tFrame:* = null):void
		{
			pCallback = tCallback
			pCallbackFrame = tFrame // if null, it runs the callback on the final frame or end frame if specified
		}
		
		private function fNextFrame():void
		{
			pNextFrameTime += pFrameLength
			if (pClip.currentFrame + 1 > pClip.totalFrames)
			{
				pNextFrame = pStartFrame
			}
			WzUnitTestSample.fGoToFrame(pClip, pNextFrame)
			
			//trace(pClip.name + " moving to " + pClip.currentFrame + " of " + pClip.totalFrames)
			if (pCallback != null)
			{
				if (pCallbackFrame != null && (pClip.currentFrame == pCallbackFrame || pClip.currentFrameLabel == pCallbackFrame))
				{
					pCallback(this)
				}
			}
			pNextFrame++
			if (!pLooping && pClip.currentFrameLabel && pClip.currentFrameLabel.indexOf("loop") >= 0)
			{
				pLooping = true
				pStartFrame = pClip.currentFrame
				var tTimes:int = pClip.currentFrameLabel.indexOf("x")
				if (tTimes >= 0)
				{
					pNumLoops = int(pClip.currentFrameLabel.charAt(tTimes + 1))
				}
				else
				{
					pNumLoops = -1
				}
			}
			else if (pLooping && pClip.currentFrameLabel && pClip.currentFrameLabel.indexOf("loop_end") >= 0)
			{
				if (pNumLoops > 0)
				{
					pNumLoops--
				}
				pNextFrame = pStartFrame
				if (pNumLoops == 0)
				{
					pPlaying = false
					if (pCallback != null)
					{ 
						pCallback(this)
					}
					
				}
			}
			if ((pEndFrame != null && (pClip.currentFrame == pEndFrame || pClip.currentFrameLabel == pEndFrame)) || pClip.currentFrame == pClip.totalFrames)
			{
				//trace("on the last frame; looping is " + _pLooping)
				if (!_pLooping)
				{
					pPlaying = false
				if (pCallback != null && !pCallbackFrame)
				{ // no callback frame was specified but we're at the end of the animation
					pCallback(this)
				}
				}
				pNextFrame = pStartFrame
			}
		}
		
		public function fJumpToEnd():void 
		{
			if (!pLooping) { // jump to end doesn't make much sense in a looping animation
			for (var i:int = pNextFrame; i <= pClip.totalFrames; i++) {
				
			WzUnitTestSample.fGoToFrame(pClip, i)
			if ((pLooping && pClip.currentFrameLabel && pClip.currentFrameLabel.indexOf("loop_end") >= 0) || (pEndFrame != null && (pClip.currentFrame == pEndFrame || pClip.currentFrameLabel == pEndFrame)) || pClip.currentFrame == pClip.totalFrames)
			{
				break
			}
			}
			}
		}
		
		public function fPlay():void
		{
			pPlaying = true
			pNextFrameTime = getTimer() + pFrameLength
		}
		
		public function fStop():void
		{
			pPlaying = false
		}
		
		public function fGoto(tFrame:*, tAndPlay:Boolean = false, tEndFrame:* = null):void
		{
			WzUnitTestSample.fGoToFrame(pClip, tFrame)
			pStartFrame = pClip.currentFrame
			pNextFrame = pStartFrame + 1
			pEndFrame = tEndFrame // if not specified, plays to the end of the animation
			if (tAndPlay)
			{
				fPlay()
			_pLooping = false
			}
			else
			{
				pPlaying = false
			}
		}
		
		public function set pFrameRate(tRate:Number):void
		{
			pFrameLength = Math.round(1000 / tRate)
		}
		
		public function get pLooping():Boolean
		{
			return _pLooping;
		}
		
		public function set pLooping(value:Boolean):void
		{
			_pLooping = value;
		}
		
		public function get pClip():MovieClip
		{
			return _pClip;
		}
		
		public function set pClip(tClip:MovieClip):void
		{
			_pClip = tClip;
		}
	}

  export { MovieClipSimpleAnimator };