<template>
    <div class="bd-title">
      {{title}}
      <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
      'title': {
        type: String,
      }
    },
    data() {
        return {
        }
    },
    computed: {
    },
    created() {
    },
    mounted() {
    },
    watch: {
    },
    methods: {
    },
    components: {
    },
}
</script>
