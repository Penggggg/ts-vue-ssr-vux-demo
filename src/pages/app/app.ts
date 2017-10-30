import Vue from 'vue';
import Component from 'vue-class-component';

@Component({

})
export default class App extends Vue {

  created( ) {
    console.log(`App created!`);
  }

  mounted( ) {
    console.log('App mounted!');
  }

}