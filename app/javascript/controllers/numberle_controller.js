import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["guess"]

  handleKeydown(event) {
    const input = event.target
    const index = this.guessTargets.indexOf(input)
    const key = event.key

    switch (key) {
      case "ArrowLeft":
        event.preventDefault()
        this.focusPrev(index)
        break

      case "ArrowRight":
        event.preventDefault()
        this.focusNext(index)
        break

      case "Backspace":
        event.preventDefault()
        if (input.value) {
          input.value = ""
        } else {
          this.focusPrev(index)
          if (index > 0) this.guessTargets[index - 1].value = ""
        }
        break

      default:
        if (/^[0-9]$/.test(key)) {
          event.preventDefault()
          input.value = key
          this.focusNext(index)
        } else if (key.length === 1) {
          event.preventDefault()
        }
    }
  }

  focusNext(index) {
    if (index < this.guessTargets.length - 1)
      this.guessTargets[index + 1].focus()
  }

  focusPrev(index) {
    if (index > 0)
      this.guessTargets[index - 1].focus()
  }
}
