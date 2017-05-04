var lazyLoad = (function(window, _dom) {
	var $ = {};
	var _option_default = {
		time: 1000,
		delay: 500,
		selector: 'lazyload',
		src: 'lazyload-src',
		modeType: 0 //0-img标签; 1-背景图
	}
	$.option = "";
	var seeHeight = _dom.documentElement.clientHeight; //可见区域高度
	/**
	 * 节流，控制onscroll触发频率并延迟加载
	 * @param {Object} fun 延迟出发函数体
	 * @param {Object} time	滑动出发间隔时间
	 * @param {Object} delay 延迟触发函数时间
	 */
	var delaytime = function(fun, time, delay) {
		if(!time) {
			time = _option_default.time
		}
		if(!delay) {
			delay = _option_default.delay
		}
		var timeout;
		var startTime = new Date();
		return function() {
			var curTime = new Date();
			clearTimeout(timeout)
			if(curTime - startTime > time) {
				startTime = curTime;
				fun.apply();
			} else {
				timeout = setTimeout(fun, delay)
			}
		}
	}
	/**
	 * 加载当前可见区域图片
	 */
	var loadpic = function() {
		var scrollTop = _dom.documentElement.scrollTop || _dom.body.scrollTop; //滚动条距离顶部高度
		var lazyClass = $.option.selector ? $.option.selector : _option_default.selector;
		var lazySrc = $.option.src ? $.option.src : _option_default.src;
		var imgs = _dom.querySelectorAll('.' + lazyClass);
		var modeType = $.option.modeType ? $.option.modeType : _option_default.modeType;
		for(var i = 0; i < imgs.length; i++) {
			if(imgs[i].offsetTop < seeHeight + scrollTop) {
				if(modeType == '0') {
					imgs[i].src = imgs[i].getAttribute(lazySrc)
				} else {
					imgs[i].style.backgroundImage = 'url(' + imgs[i].getAttribute(lazySrc) + ')';
				}
				imgs[i].classList.remove(lazyClass);
			}
		}
	}
	/**
	 * 初始化并触发图片加载
	 * @param {Object} option 配置
	 */
	$.init = function(option) {
		$.option = option;
		window.addEventListener('scroll', delaytime(loadpic, option.time, option.delay));
		$.attach();
	};
	/**
	 * 触发图片加载
	 */
	$.attach = function() {
		delaytime(loadpic, $.option.time, $.option.delay)();
	}
	return $
})(window, document);