<template>
  <div class="flex">
    <button class="button">戻る</button>
    <VideoSample />
  </div>
</template>

<script setup lang="ts">
import VideoSample from "./components/VideoSample.vue";
</script>

<style>
.flex {
  display: flex;
}

.button {
  height: 30px;
  width: 200px;
  margin-right: 20px;
}
</style>
