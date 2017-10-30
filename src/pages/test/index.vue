<template lang="pug">
  .modal
    h3 {{ count }}
    button( @click="addCount" ) add
</template>

<script lang="ts">
import Test from './index.ts';
export default Test;
</script>

<style lang="less" scoped>
@import './index.less';
</style>