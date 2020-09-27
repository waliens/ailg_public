<template>
  <div class="event-list">
    <event-list-element v-for="event in events" v-bind:key="event.name"
      :name="event.name"
      :datetime="event.datetime">
    </event-list-element>
  </div>
</template>

<script>
import EventListElement from "./EventListElement";
export default {
  name: "EventList",
  components: {EventListElement},
  props: { events: { type: Array }}
}
</script>

<style scoped>
.event-list {
  margin: 10px;
  padding: 10px;
}

</style>