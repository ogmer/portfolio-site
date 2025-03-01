import { createApp, defineComponent } from "vue"

interface SakuraElement {
  id: number
  style: Record<string, string>
}

type ComponentState = {
  showModal1: boolean
  showModal2: boolean
  showModal3: boolean
  showModal4: boolean
  sakuraConfig: {
    minSize: number
    maxSize: number
    animationDuration: number
    createInterval: number
  }
  sakuraElements: SakuraElement[]
  sakuraInterval?: number
}

const app = createApp(
  defineComponent({
    data(): ComponentState {
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
        sakuraElements: [],
      }
    },
    methods: {
      showModal(modalId: string) {
        const modalNumber = modalId.replace("modal", "") as
          | "1"
          | "2"
          | "3"
          | "4"
        const key = `showModal${modalNumber}` as keyof ComponentState
      },
      hideModal(modalId: string) {
        const modalNumber = modalId.replace("modal", "") as
          | "1"
          | "2"
          | "3"
          | "4"
        const key = `showModal${modalNumber}` as keyof ComponentState
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
)

app.mount(".cherry-blossom")
