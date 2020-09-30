<template>
  <div class="level box event">
    <div class="level-left">
      <div class="level-item">
        <p>{{name}}</p>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <p>{{when}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDatetime } from '@/utils/helpers'

export default {
  name: 'EventListElement',
  props: {
    name: { type: String, required: true },
    datetime: { type: String, required: true }
  },
  computed: {
    when () {
      return formatDatetime(this.datetime)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

.level-left .level-item {
  margin-left: 10px;
}

.event {
  background-color: $secondary;
}
</style>
