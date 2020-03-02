<script>
export default {
  functional: true,
  name: "Badge",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    text: [String, Number]
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
@import '../../assets/css/core/vars.styl';

.badge
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  background: #e9f4ff;
  border-radius: 0.625rem;
  box-sizing: border-box;
  font-size: 12px;
  font-family: Rubik-Regular;

  for theme in $themes
    &.{theme}
      background-color: lighten($themes[theme], 25);
      color: darken($themes[theme], 10);
</style>
