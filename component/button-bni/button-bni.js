Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTap(e){
      if(!this.props.onTap){
        return ""
      }else{
        return this.props.onTap()
      }
    }
  },
});
