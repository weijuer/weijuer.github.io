<script>
export default {
  functional: true,
  name: "WLink",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    text: String,
    href: {
      type: [String, Boolean],
      default: "#"
    }
  },
  render(h, { props, data, slots }) {
    return h(
      "a",
      {
        class: ["link", data.class, props.type],
        attrs: {
          href: props.href === true ? "#" : undefined
        },
        on: {
          click: data.on.click
        }
      },
      [props.text, slots().default]
    );
  }
};
</script>

<style lang="stylus">
@import "../../assets/css/core/vars.styl"

.link
  padding: 0
  margin: 0
  display: flex
  justify-content: flex-start

  &.icon-only
    justify-content: center;

  for theme in $themes
    &.{theme}
      color: $themes[theme]
</style>
