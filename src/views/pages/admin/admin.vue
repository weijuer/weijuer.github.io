<template>
    <form class="form form-horizontal" role="form" autocomplete="off">
        <div class="form-body">
            <div class="form-group">
                <label class="col-3 control-label">标题</label>
                <div class="col-6">
                    <input class="form-control" v-model="blog.title" type="text">
                </div>
            </div>

            <div class="form-group">
                <label class="col-3 control-label">作者</label>
                <div class="col-6">
                    <input class="form-control" v-model="blog.author" type="text">
                </div>
            </div>

            <div class="form-group">
                <label class="col-3 control-label">标签</label>
                <div class="col-6">
                    <input class="form-control" v-model="blog.tags" type="text">
                </div>
            </div>

            <div class="form-group">
                <label class="col-3 control-label">描述</label>
                <div class="col-6">
                    <textarea name id cols="30" rows="10" v-model="blog.description"></textarea>
                </div>
            </div>

            <div class="form-group">
                <label class="col-3 control-label">内容</label>
                <div class="col-6">
                    <textarea name id cols="30" rows="10" v-model="blog.content"></textarea>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    // 加载blog
    import blog from "@/api/blog";
    export default {
        name: "admin",
        data() {
            return {
                blog: {
                    title: "",
                    author: "",
                    description: "",
                    tags: "",
                    content: ""
                }
            };
        },
        methods: {
            async add_blog() {
                // 获取日志数据
                if (this.blog.title) {
                    let res = await blog.add_blog(this.blog);
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    .form-horizontal {
        
    }
</style>
