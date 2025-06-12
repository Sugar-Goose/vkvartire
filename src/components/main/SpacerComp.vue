<template>
  <div class="spacer"></div>
</template>

<script>
export default {
  name: "SpacerComp",
};
</script>

<style scoped>
.spacer {
  display: flex;
  height: 48px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  background-color: transparent;
}
</style>
