<template>
  <h1>Error {{ error.statusCode }}</h1>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head: vm => ({
    title: `Error ${this.error.statusCode}`,
  }),
}
</script>
