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
                fontCss: OrgTree.getFontCss, //设置搜索颜色
                addDiyDom: OrgTree.addDiyDom
            },
            callback: {
                onExpand: OrgTree.OnExpand
            }
        };

        var zNodes = [
            {id: 1, pId: 0, name: "父节点 1", open: true},
            {id: 11, pId: 1, name: "叶子节点 1-1"},
            {id: 12, pId: 1, name: "叶子节点 1-2"},
            {id: 13, pId: 1, name: "叶子节点 1-3"},
            {id: 111, pId: 11, name: "叶子节点 1-1-1"},
            {id: 112, pId: 11, name: "叶子节点 1-1-2"},
            {id: 113, pId: 11, name: "叶子节点 1-1-3"},
            {id: 1111, pId: 111, name: "叶子节点 1-1-1-1"},
            {id: 1112, pId: 111, name: "叶子节点 1-1-1-2"},
            {id: 1113, pId: 111, name: "叶子节点 1-1-1-3"}
        ];

        // ztree对象初始化
        var treeObj = OrgTree._orgTree.tree = $.fn.zTree.init($("#treeDemo"), setting, zNodes);

        // 隐藏根节点第一个节点
        var nodes = treeObj.getNodes();
        treeObj.hideNode(nodes[0]);

        // 显示某个隐藏的节点
        /*var node = treeObj.getNodeByParam("isHidden", true);
        if (node) {
            treeObj.showNode(node.children);
        }*/

        var treeObj2 = OrgTree._orgTree.tree = $.fn.zTree.init($("#treeDemo"), setting, nodes[0].children);

    },
    eventsBind: function () {


        // 1.绑定搜索
        $('.ztree-search-btn').on('click', function () {
            // zTree对象
            var zTree = OrgTree._orgTree.tree;
            var query = $.trim($('.ztree-search-control').val());

            // 清空上次选中样式
            OrgTree.updateNodes(false);

            if(query){
                var nodeList = OrgTree._orgTree.nodeList = zTree.getNodesByParamFuzzy('name', query);
                if(nodeList && nodeList.length > 0 ){
                    //将找到的nodelist节点更新至Ztree内
                    //$.fn.zTree.init($("#treeDemo"), setting, nodeList);
                    OrgTree.updateNodes(true);
                }else {
                    alert('暂无匹配项！');
                }
            }
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
    },
    getFontCss: function (treeId, treeNode) {
        return (!!treeNode.highlight)
            ? {color: "#A60000", "font-weight": "bold"}
            : {color: "#333", "font-weight": "normal"};
    },
    OnExpand: function (event, treeId, treeNode) {
        alert(treeNode.tId + ", " + treeNode.name + ','+ treeNode.children);

        // 1.隐藏树中当前父节点并追加此父节点到父节点导航区
        // 1.1隐藏根节点第一个节点
        var treeObj = OrgTree._orgTree.tree;
        treeObj.hideNode(treeNode);

        // 1.2添加到父节点导航区
        var $li = $('<li><a id="'+ treeNode.tId +'" href="javascript:;"><span class="active">'+ treeNode.name +'</span></a></li>');

        $('.ztree-breadcrumb').find('li>a>span').removeClass('active').end().append($li);

        // 2.展示其子节点
        var treeObj2 = $.fn.zTree.init($("#treeDemo"), treeObj.setting, treeNode.children);
    }

};

$(document).ready(function () {
    OrgTree.init();
});