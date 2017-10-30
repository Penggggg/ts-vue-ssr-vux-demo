import { createApp } from './index';
import { createRenderer } from 'vue-server-renderer';

export default context => new Promise(( resolve, reject ) => {

  const { app, router, store } = createApp( );
  router.push( context.url );

  router.onReady(( ) => {

    /** 获取component */
    const matchedComponents = router.getMatchedComponents( );
    if ( !matchedComponents.length ) {
      return reject({ code: 404 });
    }

    /** 调用asyncData */
    Promise.all( matchedComponents.map(( Component: any ) => {

      const asyncData = Component.options.methods ? Component.options.methods.asyncData : null ;
      if ( asyncData ) {
        return asyncData({
          store,
          route: router.currentRoute
        });
      }

    })).then(( ) => {

      context.state = store.state;
      resolve( app );

    }).catch( reject );

  }, reject );
});