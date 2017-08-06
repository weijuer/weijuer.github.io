
// 搜索列表
var searchContainer = new Vue({
    el: '#searchContainer',
    data: {
        searchList: [
            { portrait:'user.png', url: 'https://github.com/weijuer/tools/tree/master', title: '表格checkbox全选', description:'包含全选、反选、勾选单个，可配置元素...', author:'2016.12.15 by Weijuer' },
            { portrait:'user.png', url: 'https://github.com/weijuer/tools/tree/master', title: 'js判断IE各个版本', description:'最近做项目，业务要求能判断IE版本，尤其是IE8，故在此记录...', author:'2017.01.13 by Weijuer' },
            { portrait:'user.png', url: 'pages/7/18/CSS3-Loadings.html', title: '纯CSS加载动画展示', description:'gif动画虽然兼容性好，但是增加了http请求，CSS3的动画已经被广泛认知和运用在各大网站中，笔者将搜罗到的加载动画收集到一起...', author:'2017.07.18 by Weijuer' },
            { portrait:'user.png', url: 'pages/8/4/tab.html', title: 'tabs标签页组件', description:'最近项目中用到tab标签页，找了现有的tab插件很久都不是很满意，所以自己动手基于jquery写了一个', author:'2017.08.04 by Weijuer' }
        ]
    }
});

