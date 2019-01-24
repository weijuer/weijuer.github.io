<template>
    <div class="blog">
        <div class="container">
            <section class="document">
                <article class="article">
                    <section class="blog-list">
                        <panel
                            class="blog-item"
                            v-for="(blog, index) in blogs"
                            :key="index"
                            v-cloak
                        >
                            <div slot="header" class="panel-header">
                                <div class="caption">
                                    <div class="panel-header--title">
                                        <h3 class="panel-header--title-text">
                                            <a
                                                class="w-link"
                                                :href="blog.url"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >{{ blog.title }}</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div slot="main" class="panel-body">
                                <div class="w-bar">{{ blog.author }}</div>
                                <div class="blog-item-content">{{ blog.description }}</div>
                                <a
                                    class="w-link"
                                    :href="blog.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >{{ blog.title }}</a>
                            </div>
                        </panel>
                    </section>
                </article>

                <aside class="aside">
                    <div class="form"></div>

                    <panel v-if="user">
                        <div slot="header" class="panel-header">
                            <div class="caption">
                                <div class="panel-header--title">
                                    <h3 class="panel-header--title-text">关于我</h3>
                                </div>
                            </div>
                        </div>
                        <div slot="main" class="panel-body">
                            <img :src="user.avatar_url" alt="avatar">
                            <ul class="w-nav">
                                <li class="w-nav--item">
                                    <span>{{ user.location }}</span>
                                </li>
                                <li class="w-nav--item">
                                    <span>{{ user.avatar_url }}</span>
                                </li>
                            </ul>
                            <a :href="user.html_url" target="_blank" rel="weijuer">关注我</a>
                        </div>
                    </panel>

                    <!-- <h3 class="inner-title">布局</h3> -->
                    <panel class="blog-item">
                        <div slot="header" class="panel-header">
                            <div class="caption">
                                <div class="panel-header--title">
                                    <h3 class="panel-header--title-text">豆瓣排行</h3>
                                </div>
                            </div>
                        </div>
                        <div slot="main" class="panel-body">
                            <div class="blog-item-content">
                                <ul class="list dot-list">
                                    <li class="list--item">
                                        <a href>1</a>
                                    </li>
                                    <li class="list--item">
                                        <a href>2</a>
                                    </li>
                                    <li class="list--item">
                                        <a href>3</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </panel>
                </aside>

                <a class="btn btn-default btn-round add-blog-btn w-pulse" href="/blog-add">新增</a>
            </section>
        </div>
    </div>
</template>

<script>
    import panel from "@/components/panel";
    // 加载blog
    import blog from "@/api/blog";

    import { get_user } from "@/api/github";

    import douban from "@/api/douban";

    export default {
        name: "blog",
        data() {
            return {
                blogs: [],
                user: null,
                movies: null
            };
        },
        components: {
            panel
        },
        props: ["blog"],
        mounted() {
            // 初始化
            this.init();
        },
        methods: {
            init() {
                // 1.获取indexedDB数据
                this.get_blogs();
                // this.get_github_user();
                // this.get_movie_top250();
            },
            async get_blogs() {
                // 获取日志数据
                this.blogs = await blog.get_blogs();
            },
            async get_github_user() {
                let username = "Weijuer";
                this.user = await get_user(username);
            },
            async get_movie_top250() {
                this.movies = await douban.get_movie_top250();
            },
            async add_blog() {
                // 添加日志
                if (this.blog.title) {
                    let res = await blog.add_blog(this.blog);
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    @themeColor: #72af3a;
    .add-blog-btn {
        position: fixed;
        top: 115px;
        right: 0;
    }
</style>

<style lang="less" src="@/assets/global/less/base/componets.less" />
<style lang="less" src="@/assets/global/less//base/widgets.less" />