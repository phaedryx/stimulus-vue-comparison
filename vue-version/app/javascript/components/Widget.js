import { ref } from 'vue'
import validateMatch from '../validators/validateMatch'

const Widget = {
  name: 'Widget',
  setup() {
    const errorMessage = ref(null)
    const validator = validateMatch(/^WX-.+/)

    const check = (name) => {
      if(validator(name).valid) {
        errorMessage.value.textContent = ''
      } else {
        errorMessage.value.textContent = 'Invalid widget SKU'
      }
    }

    return { check, errorMessage }
  }
}

export default Widget
