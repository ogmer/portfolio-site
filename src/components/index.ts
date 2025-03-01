import { createApp } from "vue"

interface SakuraElement {
  id: number
  style: Record<string, string>
}

const app = createApp({
  data() {
    return {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      sakuraConfig: {
        minSize: 10,
        maxSize: 15,
        animationDuration: 10000,
        createInterval: 300,
      },
      sakuraElements: [] as SakuraElement[],
    }
  },
  methods: {
    showModal(modalId: string) {
      const modalNumber = modalId.replace("modal", "")
      ;(this as any)[`showModal${modalNumber}`] = true
    },
    hideModal(modalId: string) {
      const modalNumber = modalId.replace("modal", "")
      ;(this as any)[`showModal${modalNumber}`] = false
    },
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
        transform: "translateZ(0)",
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
      ;(this as any).sakuraInterval = setInterval(
        this.createSakura,
        this.sakuraConfig.createInterval
      )
    },
    stopSakura() {
      clearInterval((this as any).sakuraInterval)
    },
  },
  mounted() {
    this.startSakura()
  },
  beforeUnmount() {
    this.stopSakura()
  },
})

app.mount(".cherry-blossom")
