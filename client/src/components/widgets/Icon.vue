<script>
export default {
  functional: true,
  name: "WIcon",
  props: {
    type: {
      type: String,
      default: "svg"
    },
    name: String
  },
  render(h, { props, data, slots }) {
    let useDom = h("use", {
      attrs: {
        "xlink:href": props.name ? `#icon-${props.name}` : "#"
      }
    });

    let svg = h(
      "svg",
      {
        class: ["icon", data.class]
      },
      [useDom, slots().default]
    );

    let i = h("i", {
      class: ["icon", data.class]
    });

    return props.type === "svg" ? svg : i;
  }
};
</script>

<style lang="stylus">
@import "../../assets/css/core/vars.styl"

.icon
  padding: 0
  margin: 0
  width: 100%
  height: 100%
  display: flex
  justify-content: flex-start
  fill: currentColor

  for theme in $themes
    &.{theme}
      color: $themes[theme]
</style>
