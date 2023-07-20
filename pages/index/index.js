Page({
  data: {
    items: [{
        name: 'angular',
        value: 'AngularJS',
        checked: true
      },
      {
        name: 'react',
        value: 'React'
      },
      {
        name: 'polymer',
        value: 'Polymer'
      },
      {
        name: 'vue',
        value: 'Vue.js'
      },
      {
        name: 'ember',
        value: 'Ember.js'
      },
    ],
    dropDownValue : ""
  },
  onSubmit(e) {
    my.alert({
      content: this.data.dropDownValue
    });
    console.log('onSubmit', e);
  },

  typeBtn(){
    console.log("masok")
  },

  handleChildEvent(data){
    console.log(data)
  }
});