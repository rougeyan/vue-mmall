<template>
  <div>
    <table  cellspacing="0">
      <tbody>
        <tr class="table-ctx-item">
          <!-- 信息 -->
          <td class="table-cell cell-info">
            <div class="prod-msg">
              <div class="img-wrap">
                <img :src="item.productImage" alt />
              </div>
              <div class="description">{{item.productName}}</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
</style>
