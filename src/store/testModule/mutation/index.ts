
const setCount = ( state, count ) => {
  state.count = count;
};

const addCount = ( state, count ) => {
  state.count += count;
};

export const mutations = Object.assign({ }, {
  setCount,
  addCount
});