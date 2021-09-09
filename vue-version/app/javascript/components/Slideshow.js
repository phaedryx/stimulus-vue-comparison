import { ref, watch } from 'vue'

const Slideshow = {
  name: "Slideshow",
  setup() {
    let slide = ref(null)
    let index = ref(0)
    const slides = ['🐵', '🙈', '🙉', '🙊']

    const previous = () => {
      if(index.value <= 0) return

      index.value--
    }

    const next = () => {
      if(index.value >= slides.length - 1) return

      index.value++
    }

    const goTo = (slideNumber) => { index.value = slideNumber }

    const showCurrentSlide = () => {
      slide.value.textContent = slides[index.value]
    }

    watch(index, showCurrentSlide)

    return { previous, next, goTo, slide }
  }
}

export default Slideshow
