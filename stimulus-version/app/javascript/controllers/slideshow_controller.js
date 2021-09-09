import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]
  static values = { index: Number }

  previous() {
    if(this.indexValue <= 0) return

    this.indexValue--
  }

  next() {
    if(this.indexValue >= this.slideTargets.length - 1) return

    this.indexValue++
  }

  first() {
    this.indexValue = 0
  }

  last() {
    this.indexValue = this.slideTargets.length - 1
  }

  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue
    })
  }
}