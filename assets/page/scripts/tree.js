
// tree
var tree = new Vue({
    el: '#app',
    data: {
        tree: [
            {
                title: 'item 1',
                expanded: true,
                children: [
                    {
                        title: 'item 1.1',
                        expanded: false,
                        children: [
                            {
                                title: 'item 1.1.1',
                                expanded: false,
                                children: [
                                    {
                                        title: 'item 1.1.1.1',
                                        expanded: false,
                                        children: []
                                    }
                                ]
                            },
                            {
                                title: 'item 1.1.2',
                                expanded: false,
                                children: []
                            }
                        ]
                    },
                    {
                        title: 'item 1.2',
                        expanded: false,
                        children: []
                    },
                    {
                        title: 'item 1.3',
                        expanded: false,
                        children: []
                    }
                ]
            },
            {
                title: 'item 2',
                expanded: false,
                children: [
                    {
                        title: 'item 2.1',
                        expanded: false,
                        children: [
                            {
                                title: 'item 2.1.1',
                                expanded: false,
                                children: []
                            },
                            {
                                title: 'item 2.1.2',
                                expanded: false,
                                children: [
                                    {
                                        title: 'item 2.1.2.1',
                                        expanded: false,
                                        children: []
                                    },
                                    {
                                        title: 'item 2.1.2.2',
                                        expanded: false,
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'item 2.2',
                        expanded: false,
                        children: []
                    },
                    {
                        title: 'item 2.3',
                        expanded: false,
                        children: []
                    }
                ]
            }
        ]
    },
    components: {
        tree: {
            template: '#tree-template'
        }
    }
});
