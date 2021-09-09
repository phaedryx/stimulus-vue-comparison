import { Controller } from "stimulus"
import validateMatch from "../validators/validateMatch"

export default class extends Controller {
  static targets = [ "sku", "error" ]

  check() {
    const validator = validateMatch(/^WX-.+/)

    if(validator(this.skuTarget.value).valid) {
      this.errorTarget.textContent = ''
    } else {
      this.errorTarget.textContent = 'Invalid widget SKU'
    }
  }
}
