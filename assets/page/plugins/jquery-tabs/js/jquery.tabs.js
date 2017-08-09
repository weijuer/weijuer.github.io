/**
 * name: tabs
 * author: weijuer
 * date: 2017/8/3
 * version: v1.0
 * Licensed under the MIT license
 */
;(function ($, window, document, undefined) {

    'use strict';

    /*****定义Tab的构造函数******/
    // 将变量定义到对象的属性上，函数变成对象的方法，使用时通过对象获取
    var Tab = function (elem, opts, args) {

        // 获取到的jQuery对象
        this.element = elem;
        this.$element = $(this.element);

        // 获取jQuery对象的selector属性
        this.selector = args.selector;

        // 设置默认参数
        this.defaults = {
            event: 'click', // 触发方式
            active: 0, // 默认展示第一项
            // timeout: 0, // 延时
            // effect: 'fade', // 默认动画效果 fade,
            callback: null // 回调函数
        };

        this.options = $.extend({}, this.defaults, opts);
        this._init();
    };

    // 定义Tab的方法
    Tab.prototype = {
        _init: function () {
            // tabs 元素
            this.$tabs = this.$element.find('.tab-bar > ul > li');
            // content panes
            this.$tabPane = this.$element.find('.tab-content > .tab-pane');
            // current index
            this.current = -1;
            // 展示第一项
            this._show();
            // 初始化事件
            this._initEvents();
        },
        _initEvents: function () {
            // 找回自己
            var self = this;
            var $options = self.options;
            // var selector = self.selector + ' ' + this.$tabs.selector;

            // 切换为事件委托，已适应未来元素的事件绑定
            this.$tabs.on($options.event, function(e) {

                // 阻止默认点击事件
                e.preventDefault();
                var index = $(this).index();

                // tabs切换
                self._show(index);

                // 回调函数
                if ($options.callback){
                    $options.callback(self);
                }
            });

        },
        _show: function (index) {
            // 更改当前current
            this.current = index !== undefined ? index : this.options.active >= 0 && this.options.active < this.$tabs.size() ? this.options.active : 0;

            if( this.current >= 0 ) {
                this.$tabs.eq(this.current).addClass("active").siblings().removeClass('active');
                this.$tabPane.eq(this.current).addClass("active").siblings().removeClass('active');
            }
        }
    };

    /******$.fn里面应专注于插件的调用******/
    // 在插件中使用Tab对象
    $.fn.tab = function (options) {

        // 声明变量o，存储的是jQuery对象的selector属性和context属性
        var args = { selector: this.selector, context: this.context };

        return this.each(function () {
            // 创建Tab的实体
            new Tab(this, options, args);
        });
    };
})(jQuery, window, document);

