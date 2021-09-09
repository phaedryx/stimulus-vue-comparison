import { ref } from 'vue'

const Reveal = {
  name: 'Reveal',
  setup() {
    const items = ref([])

    const toggle = () => {
      items.value.forEach(item => {
        item.classList.toggle('hidden')
      })
    }

    const show = () => {
      items.value.forEach(item => {
        item.classList.remove('hidden')
      })
    }

    const hide = () => {
      items.value.forEach(item => {
        item.classList.add('hidden')
      })

    }

    return { items, toggle, show, hide }
  }
}

export default Reveal
