<template>
  <div class="panel">
    <slot name="header" class="panel-header">title</slot>
    <slot name="main" class="panel-body">main</slot>
    <slot name="footer" class="panel-footer"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Panel extends Vue {}
</script>

<style lang="stylus" scoped>
.panel {
  box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08);
  background-color: #fff;

  .panel-header {
    border-bottom: 1px solid #ebedf2;
  }

  .panel-body {
    color: #575962;
  }

  .panel-footer {
    border-top: 1px solid #ebedf2;
  }
}

.panel {
  margin-bottom: 2.2rem;

  .panel-header {
    position: relative;
    padding: 0 2.2rem;
    height: 4.1rem;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;

    .caption {
      display: flex;
      align-items: center;
      align-content: flex-start;

      .panel-header--title {
        display: flex;
        align-items: center;

        .panel-header--title-text {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          font-size: 1.1rem;
          font-weight: 500;
        }
      }
    }
  }

  .panel-body {
    padding: 2.2rem 2.2rem;
  }

  .panel-footer {
    padding: 1.1rem 2.2rem;
  }
}
</style>
