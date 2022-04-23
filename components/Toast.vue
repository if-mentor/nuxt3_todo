<script setup>
import { useTodoStore } from "@/store/index";
import { computed } from "vue";

const store = useTodoStore();

const isPopUp = computed(() => {
  return store.isPopUp
})

const closePopUp = () => {
  store.popUp();
}


</script>


<template>
  <div>
      <div v-show="isPopUp" :class="{ popMessage: isPopUp }">
        <div class="close-container">
          <span class="close" @click="closePopUp">✖︎</span>
        </div>
        <p class="text-black"><slot></slot></p>
      </div>
</div>
</template>


<style>

.popMessage {
  width: 400px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: lightgreen;
  position: fixed;
  bottom: 30px;
  right: 12px;

  animation: pop 3s forwards;
}

.close-container {
  position: relative;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}


@keyframes pop {
  0% {
    transform: translateY(20px);
    opacity: 0;
    animation-timing-function: ease-out;
  }
  20%,
  80% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: translateY(20px);
    opacity: 1;
  }
}
</style>