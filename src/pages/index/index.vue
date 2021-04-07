<template>
  <section class="index-content">
    <echart :width="'500px'" :height="'500px'" class="chart"></echart>
    <HelloWorld @to-emit="fatherEmit" class="btn"></HelloWorld>
  </section>
</template>

<script lang="ts">
import { ref, reactive, onMounted } from 'vue';
import echart from '@/components/echart.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    echart,
    HelloWorld,
  },
  setup() {
    const str = ref('vue3');
    const fatherEmit = (res: string) => {
      console.log(res)
    };
    return {
      str,
      fatherEmit
    };
  },
};
</script>

<style lang="scss" scoped>
.index-content {
  .chart {
    margin: 0 auto;
  }
  .btn {
    margin-top: 50px;
  }
}
</style>