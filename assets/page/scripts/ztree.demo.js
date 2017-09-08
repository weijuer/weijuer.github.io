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


var OrgTree = {
    _orgTree: {
        tree: null,
        nodeList: []
    },
    init: function () {
        this.pageRender();
        this.eventsBind();
    },
    pageRender: function () {
        this.initZtree();
    },
    initZtree: function () {

        var setting = {
            edit: {
                enable: true
            },
            data: {
                simpleData: {
                    enable: true
                }
            },
            view: {
                showIcon: false,
                selectedMulti: false,
                addDiyDom: OrgTree.addDiyDom
            }
        };

        var zNodes = [
            {id: 1, pId: 0, name: "父节点 1", open: true},
            {id: 11, pId: 1, name: "叶子节点 1-1"},
            {id: 12, pId: 1, name: "叶子节点 1-2"},
            {id: 13, pId: 1, name: "叶子节点 1-3"}
        ];

        OrgTree._orgTree.tree = $.fn.zTree.init($("#treeDemo"), setting, zNodes);

    },
    eventsBind: function () {


        // 1.绑定搜索
        $('.ztree-search-btn').on('click', function () {
            // zTree对象
            var zTree = OrgTree._orgTree.tree;
            var query = $.trim($('.ztree-search-control').val());

            OrgTree.updateNodes(false);
            OrgTree._orgTree.nodeList = zTree.getNodesByParamFuzzy('name', query);
            OrgTree.updateNodes(true);
        });
    },
    updateNodes: function (highlight) {
        // zTree对象
        var zTree = OrgTree._orgTree.tree;
        var nodeList = OrgTree._orgTree.nodeList;

        for (var i = 0, l = nodeList.length; i < l; i++) {
            nodeList[i].highlight = highlight;
            zTree.updateNode(nodeList[i]);
        }
    },
    addDiyDom: function (treeId, treeNode) {
        if (treeNode.parentNode && treeNode.parentNode.id !== 2) return;
        var aObj = $("#" + treeNode.tId + '_a');
        var editStr = "<span id='diyBtn_" + treeNode.id + "' class='ztree-user-count'><i class='fa fa-user'></i>(...)</span>";
        aObj.after(editStr);
    }

};

$(document).ready(function () {
    OrgTree.init();
});