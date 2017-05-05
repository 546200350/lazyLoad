# lazyLoad

* javaScript 懒加载
## init
* lazyLoad.init(option);
#### option 初始化配置参数
**time:**

* 描述：触发间隔时间
* 默认值：1000

**delay:** 

* 描述：延迟加载时间
* 默认值：500

**selector:** 

* 描述：需要懒加载的class
* 默认值：'lazyload'

**src:** 

* 描述：真实图片地址属性
* 默认值：'lazyload-src'

**modeType:** 

* 描述：懒加载模式0-img标签，设置src
*                 1-背景，设置backgroundImg
* 默认值：0



## attach
* lazyLoad.attach();
* 触发页面可见区域图片加载

