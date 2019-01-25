<template>
    <form class="form form-horizontal" role="form" autocomplete="off">
        <div class="form-body">
            <div class="form-group">
                <label class="col-2 form-label">标题</label>
                <div class="col-6">
                    <input class="form-control" v-model="blog.title" type="text">
                    <span class="form-help"></span>
                </div>
            </div>

            <div class="form-group">
                <label class="col-2 form-label">作者</label>
                <div class="col-6">
                    <input class="form-control" v-model="blog.author" type="text">
                </div>
            </div>

            <div class="form-group">
                <label class="col-2 form-label">标签</label>
                <div class="col-6">
                    <input class="form-control" v-model="blog.tags" type="text">
                </div>
            </div>

            <div class="form-group">
                <label class="col-2 form-label">描述</label>
                <div class="col-6">
                    <textarea class="form-control" rows="3" v-model="blog.description"></textarea>
                </div>
            </div>

            <div class="form-group">
                <label class="col-2 form-label">内容</label>
                <div class="col-6">
                    <textarea class="form-control" rows="3" v-model="blog.content"></textarea>
                </div>
            </div>
        </div>

        <!-- <div class="form-actions">
            <div class="row">
                <div class="col-6 offset-2">
                    <a class="btn btn-primary" @click="add_blog" href="javascript:;">保存</a>
                    <a class="btn btn-secondary" href="javascript:;">取消</a>
                </div>
            </div>
        </div> -->
    </form>
</template>

<script>
    import panel from "@/components/panel";
    // 加载blog
    import blog from "@/api/blog";
    export default {
        name: "blog-add",
        components: {
            panel
        },
        data() {
            return {
                blog: {
                    id: 0,
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

                    // 通知外部
                    this.$emit('add', res);
                }
            }
        }
    };
</script>

<style lang="less" src="@/assets/global/less/base/componets.less" />

<style lang="less" scoped>
    @defaulTheme: #72af3a;

    .form {
        position: relative;

        .form-body {
            .form-group {
                display: flex;
                margin: 0 -15px 15px;

                &::first-child {
                    margin-top: 0;
                }

                .form-label {
                    padding-top: 0.625rem;
                    padding-bottom: 0.625rem;
                    margin-bottom: 0;
                    font-size: inherit;
                    line-height: 1.25;
                }

                .form-control {
                    display: block;
                    width: 100%;
                    height: calc(2.5rem + 2px);
                    padding: 0.625rem 0.875rem;
                    font-size: 1rem;
                    line-height: 1.25;
                    color: #495057;
                    background-color: #fff;
                    background-clip: padding-box;
                    border: 1px solid #ced4da;
                    border-radius: 0.25rem;
                    transition: border-color 0.15s ease-in-out,
                        box-shadow 0.15s ease-in-out,
                        -webkit-box-shadow 0.15s ease-in-out;

                    &:focus {
                        color: #495057;
                        background-color: #fff;
                        border-color: @defaulTheme;
                        outline: 0;
                        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.13),
                            0 0 8px rgb(159, 214, 107);
                    }

                    .form-help {
                        display: inline-flex;
                        font-weight: 300;
                        font-size: 0.85rem;
                        padding-top: 7px;
                        color: #7b7e8a;
                    }
                }

                textarea.form-control {
                    height: auto;
                }
            }
        }

        &.form-horizontal {
            width: 100%;
        }
    }
</style>
