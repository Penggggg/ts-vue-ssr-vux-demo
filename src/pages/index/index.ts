import Vue from 'vue';
import Component from 'vue-class-component';

@Component({

})
export default class Index extends Vue {

  created( ) {
    console.log(`Index created!`);
  }

  mounted( ) {
    console.log('Index mounted!');
  }

}