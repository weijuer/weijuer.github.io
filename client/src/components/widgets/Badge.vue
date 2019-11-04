<script>
export default {
  functional: true,
  name: "Badge",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    text: String,
    vertical: {
      type: String,
      default: "top"
    }
  },
  render(h, { props, slots }) {
    return h(
      "span",
      {
        class: ["badge", props.type, props.vertical]
      },
      props.text || slots().default
    );
  }
};
</script>

<style lang="stylus" scoped>
@import "@/assets/core/vars.styl"

.badge
  padding: 0
  margin: 0
  display: inline-flex
  justify-content: center
  align-items: center
  height: 18px
  width: 18px
  border-radius: 50%
  font-size: 0.8rem

  &.middle
    vertical-align: middle

  &.top
    vertical-align: top

  for theme in $themes
    &.{theme}
      background-color: $themes[theme]
</style>
