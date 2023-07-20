Component({
  mixins: [],
  data: {
    colorData: ""
  },
  props: {},
  didMount() {
    this.colorChange()
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    colorChange() {
      if (!this.props.color) {
        this.setData({
          colorData: "orange"
        })
      } else {
        this.setData({
          colorData: this.props.color
        })
      }
    }
  },
});