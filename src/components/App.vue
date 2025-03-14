<template>
  <div class="app">
    <Sakura />
    
    <div class="content">
      <!-- モーダルトリガーボタン -->
      <button v-for="n in 4" :key="n" @click="showModal[n] = true">
        モーダル {{ n }}を開く
      </button>
      
      <!-- モーダルコンポーネント -->
      <Modal v-for="n in 4" :key="n" v-model="showModal[n]">
        <h2>モーダル {{ n }}</h2>
        <p>モーダル {{ n }}の内容がここに表示されます。</p>
      </Modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modal from './modal/Modal.vue'
import Sakura from './sakura/Sakura.vue'

export default defineComponent({
  name: 'App',
  components: {
    Modal,
    Sakura
  },
  data() {
    return {
      showModal: {
        1: false,
        2: false,
        3: false,
        4: false
      }
    }
  }
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 2;
}

button {
  padding: 0.5rem 1rem;
  border: 2px solid #ff69b4;
  border-radius: 4px;
  background-color: white;
  color: #ff69b4;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #ff69b4;
  color: white;
}
</style>