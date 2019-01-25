<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">{{ header }}</slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">{{ body }}</slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <a class="btn btn-primary" @click="comform" href="javascript:;">保存</a>
                            <a class="btn btn-secondary" @click="cancel" href="javascript:;">取消</a>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "modal",
        data() {
            return {
                header: "default header",
                body: "default body"
            };
        },
        methods: {
            comform() {
                this.$emit("comform");
            },
            cancel() {
                this.$emit("cancel");
            }
        }
    };
</script>

<style lang="less" scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 70%;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;

        .modal-header h3 {
            margin-top: 0;
            color: #42b983;
        }

        .modal-body {
            margin: 20px 0;
            border-bottom: 1px solid #eee;
        }

        .modal-footer {
            display: flex;
            justify-content: flex-end;
        }
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
