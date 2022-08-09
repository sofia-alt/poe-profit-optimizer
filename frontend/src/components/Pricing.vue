<template>
  <div class="pricing">
    <ul>
      
    </ul>
  </div>
</template>
<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex'
export default {
  name: 'prising',
  setup() {
    const store = useStore()

    const loadGems = async () => {
      store.dispatch('loadGems')
    };

    loadGems()
    
    const gems = computed(
      () => store.getters.gems
    )

    return {
      loadGems,
      gems
    }
  },
}
</script>