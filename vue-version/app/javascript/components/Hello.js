import { ref } from 'vue'

const Hello = {
  name: 'Hello',
  setup() {
    let name = ref(null)
    let output = ref(null)

    const greet = () => {
      output.value.textContent = `Hello, ${name.value.value}!`
    }

    return { name, output, greet }
  }
}

export default Hello
