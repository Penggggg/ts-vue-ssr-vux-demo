import * as Vuex from 'vuex';

type vxCtx = Vuex.ActionContext< any, any >;

const fetchCount = ({ commit }: vxCtx) => {
  return fetchData( 0 ).then( count => {
    commit( 'setCount', count );
  });
};

const fetchData = ( time: number ): Promise< number > => new Promise( resolve => {
  setTimeout(( ) => {
    resolve( 5 );
  }, time );
});

export const actions = Object.assign({ }, {
  fetchCount
});