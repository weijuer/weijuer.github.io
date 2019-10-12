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
  render(h, { props, slots }) {
    return h(
      "a",
      {
        class: ["link", props.type, props.vertical],
        attrs: {
          href: props.href === true ? "#" : undefined
        }
      },
      [props.text, slots().default]
    );
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "../../../assets/css/core/vars.styl"

.link
  padding: 0
  margin: 0
  display: flex
  justify-content: flex-start

  &.middle
    vertical-align: middle

  &.top
    vertical-align: top

  for theme in $themes
    &.{theme}
      color: $themes[theme]
</style>
