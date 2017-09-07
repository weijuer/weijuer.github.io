var setting = {
    check: {
        enable: true
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        onNodeCreated: onNodeCreated
    }
};

var dataMaker = function (count) {
    var nodes = [], pId = -1,
        min = 10, max = 90, level = 0, curLevel = [], prevLevel = [], levelCount,
        i = 0, j, k, l, m;

    while (i < count) {
        if (level === 0) {
            pId = -1;
            levelCount = Math.round(Math.random() * max) + min;
            for (j = 0; j < levelCount && i < count; j++, i++) {
                var n = {id: i, pId: pId, name: "Big-" + i};
                nodes.push(n);
                curLevel.push(n);
            }
        } else {
            for (l = 0, m = prevLevel.length; l < m && i < count; l++) {
                pId = prevLevel[l].id;
                levelCount = Math.round(Math.random() * max) + min;
                for (j = 0; j < levelCount && i < count; j++, i++) {
                    var n = {id: i, pId: pId, name: "Big-" + i};
                    nodes.push(n);
                    curLevel.push(n);
                }
            }
        }
        prevLevel = curLevel;
        curLevel = [];
        level++;
    }
    return nodes;
};

var ruler = {
    doc: null,
    ruler: null,
    cursor: null,
    minCount: 5000,
    count: 5000,
    stepCount: 500,
    minWidth: 30,
    maxWidth: 215,
    init: function () {
        ruler.doc = $(document);
        ruler.ruler = $("#ruler");
        ruler.cursor = $("#cursor");
        if (ruler.ruler) {
            ruler.ruler.bind("mousedown", ruler.onMouseDown);
        }
    },
    onMouseDown: function (e) {
        ruler.drawRuler(e, true);
        ruler.doc.bind("mousemove", ruler.onMouseMove);
        ruler.doc.bind("mouseup", ruler.onMouseUp);
        ruler.doc.bind("selectstart", ruler.onSelect);
        $("body").css("cursor", "pointer");
    },
    onMouseMove: function (e) {
        ruler.drawRuler(e);
        return false;
    },
    onMouseUp: function (e) {
        $("body").css("cursor", "auto");
        ruler.doc.unbind("mousemove", ruler.onMouseMove);
        ruler.doc.unbind("mouseup", ruler.onMouseUp);
        ruler.doc.unbind("selectstart", ruler.onSelect);
        ruler.drawRuler(e);
    },
    onSelect: function (e) {
        return false;
    },
    getCount: function (end) {
        var start = ruler.ruler.offset().left + 1;
        var c = Math.max((end - start), ruler.minWidth);
        c = Math.min(c, ruler.maxWidth);
        return {width: c, count: (c - ruler.minWidth) * ruler.stepCount + ruler.minCount};
    },
    drawRuler: function (e, animate) {
        var c = ruler.getCount(e.clientX);
        ruler.cursor.stop();
        if ($.browser.msie || !animate) {
            ruler.cursor.css({width: c.width});
        } else {
            ruler.cursor.animate({width: c.width}, {duration: "fast", easing: "swing", complete: null});
        }
        ruler.count = c.count;
        ruler.cursor.text(c.count);
    }
};

var showNodeCount = 0;
function onNodeCreated(event, treeId, treeNode) {
    showNodeCount++;
}

function createTree() {
    var zNodes = dataMaker(ruler.count);
    showNodeCount = 0;
    $("#treeDemo").empty();
    setting.check.enable = $("#showChk").attr("checked");
    var time1 = new Date();
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    var time2 = new Date();

    alert("节点共 " + zNodes.length + " 个, 初始化生成 DOM 的节点共 " + showNodeCount + " 个"
        + "\n\n 初始化 zTree 共耗时: " + (time2.getTime() - time1.getTime()) + " ms");
}

$(document).ready(function () {
    var zNodes = dataMaker(5000);
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);


});