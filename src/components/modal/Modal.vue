<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <slot></slot>
      <button class="modal-close" @click="closeModal">×</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Modal',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    isVisible: {
      get() {
        return this.modelValue
      },
      set(value: boolean) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    closeModal() {
      this.isVisible = false
    }
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 500px;
  width: 90%;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
}
</style>