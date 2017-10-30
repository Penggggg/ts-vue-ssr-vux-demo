import Vue from 'vue';
import Component from 'vue-class-component';

@Component({

})
export default class Test extends Vue implements AsyncDataComponent {

  name: string = 'asdasd';

  asyncData({ store, route }) {
    return store.dispatch('fetchCount');
  }

  addCount( ) {
    this.$store.commit('addCount', 1 );
  }

  created( ) {
    console.log(`Modal created!`);
  }

  mounted( ) {
    console.log('Modal mounted!');
  }

  get count( ) {
    return this.$store.state.testModule.count;
  }

}