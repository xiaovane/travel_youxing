/*!
 *丹阳门户首页交互
 *author: xiaolong
 */

(function(win, $) {
    // TAB切换,依赖于tabview.js组件
    $(".tab-view").each(function(index, el) {
        new TabView ({
            dom: el,
            activeCls: 'current'
        });
    });
}(this, jQuery));


