<template>
  <section>select</section>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';

export default {
  setup() {
    const str = ref('vue3');
    return {
      str,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>