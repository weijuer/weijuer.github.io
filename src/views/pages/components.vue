<template>
    <div class="components">
        <div class="container">
            <section class="document">
                <aside class="aside">
                    <nav class="side-bar" v-for="(item, index) in components" :key="index">
                      <h3 class="inner-title">{{ item.name }}</h3>
                      <ul class="w-nav">
                          <li class="w-nav--item" v-for="(subItem, index) in item.content" :key="index">
                              <a href="">{{ subItem.title }}</a>
                          </li>
                      </ul>
                    </nav>
                </aside>

                <article class="article">
                    <section class="example" v-html="content"></section>
                </article>
            </section>
        </div>
    </div>
</template>

<script>
    //const componentsJSON = require('../mock/components.json');
    // 2.1 获取数据集合
    //const components = componetsJSON.components;

    export default {
        name: "components",
        data() {
            return {
                components: [],
                content: ''
            };
        },
        components: {},
        mounted() {
            // 获取indexedDB数据
            this.get_indexedDB_data()
        },
        methods: {
            get_indexedDB_data: function(params) {
               
            }
        }
    };
</script>

<style lang="less" src="@/assets/global/less/base/componets.less" />
<style lang="less" src="@/assets/global/less/base/widgets.less" />

<style lang="less" scoped>
    .components {
        background: #fff;
    }
</style>
