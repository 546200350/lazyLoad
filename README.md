# lazyLoad

* javaScript 原生JS懒加载

```html
    <img class="lazyload" src="defult.png" lazyload-src="realimg.png" modeType="src" >
```

```javascript  
    var option = {
            time: 1000,
            delay: 500,
            selector: 'lazyload',
            src: 'lazyload-src'
        }

    lazyLoad.init(option)
```
                
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


## attach
* lazyLoad.attach();
* 触发页面可见区域图片加载

##modeTpe

* 默认值：'src'
* 描述:设置懒加载对象类型。src-img标签，bg-背景图
