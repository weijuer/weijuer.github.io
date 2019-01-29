<template>
    <div id="app" :class="['app-page', 'default', isSideMenuActive ? 'app-side-menu-active' : '']">
        <pageHeader/>
        <pageMain/>
        <pageFooter/>
        <backTop/>
    </div>
</template>

<script>
    import pageHeader from "./Header";
    import pageMain from "./Main";
    import pageFooter from "./Footer";
    import backTop from "@/components/backTop";
    import { mapState, mapActions } from "vuex";

    export default {
        name: "app-layout",
        computed: {
            ...mapState(["isSideMenuActive"])
        },
        components: {
            pageHeader,
            pageMain,
            pageFooter,
            backTop
        },
        created() {
            // 1.绑定页面监听滚动事件
            document.addEventListener("visibilitychange", this.pageVisibilityChange);
        },
        methods: {
            ...mapActions("app", {
                pageVisibilityChange: "TOGGLE_HIDDEN"
            })
        },
        destroyed() {
            // 2.去除页面监听事件
            document.removeEventListener("visibilitychange", this.pageVisibilityChange);
        }
    };
</script>

<style lang="less" src="@/assets/global/less/index.less" />

