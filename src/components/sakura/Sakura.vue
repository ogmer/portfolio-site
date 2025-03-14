<template>
  <div class="sakura-container">
    <div
      v-for="sakura in sakuraElements"
      :key="sakura.id"
      class="sakura"
      :style="sakura.style"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface SakuraElement {
  id: number
  style: Record<string, string>
}

interface SakuraConfig {
  minSize: number
  maxSize: number
  animationDuration: number
  createInterval: number
}

export default defineComponent({
  name: 'Sakura',
  data() {
    return {
      sakuraElements: [] as SakuraElement[],
      sakuraConfig: {
        minSize: 10,
        maxSize: 15,
        animationDuration: 10000,
        createInterval: 300,
      } as SakuraConfig,
      sakuraInterval: undefined as number | undefined,
    }
  },
  methods: {
    createSakura() {
      if (this.sakuraElements.length >= 100) return

      const size =
        Math.random() *
          (this.sakuraConfig.maxSize - this.sakuraConfig.minSize) +
        this.sakuraConfig.minSize
      const positionX = Math.random() * window.innerWidth
      const positionY = Math.random() * window.innerHeight

      const sakuraStyle: Record<string, string> = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${positionX}px`,
        top: `${positionY}px`,
        animationDuration: `${this.sakuraConfig.animationDuration}ms`,
        transform: 'translateZ(0)',
      }

      const sakura: SakuraElement = { id: Date.now(), style: sakuraStyle }
      this.sakuraElements.push(sakura)

      requestAnimationFrame(() => {
        setTimeout(() => {
          this.sakuraElements = this.sakuraElements.filter(
            (el) => el.id !== sakura.id
          )
        }, this.sakuraConfig.animationDuration)
      })
    },
    startSakura() {
      this.sakuraInterval = window.setInterval(
        this.createSakura,
        this.sakuraConfig.createInterval
      )
    },
    stopSakura() {
      if (this.sakuraInterval) {
        window.clearInterval(this.sakuraInterval)
        this.sakuraInterval = undefined
      }
    },
  },
  mounted() {
    this.startSakura()
  },
  beforeUnmount() {
    this.stopSakura()
  },
})
</script>

<style scoped>
.sakura-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.sakura {
  position: absolute;
  background-image: url('/public/sakura.webp');
  background-size: contain;
  background-repeat: no-repeat;
  animation: fall linear;
  will-change: transform;
}

@keyframes fall {
  0% {
    transform: translateY(-100%) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
  }
}
</style>