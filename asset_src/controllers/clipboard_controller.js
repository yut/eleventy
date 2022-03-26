
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "source" , "display"]

  connect() {
    console.log("clipboard_controller.js")
  }

  copy() {
    event.preventDefault()
    navigator.clipboard.writeText(this.sourceTarget.value)
    const message = `Copied ${this.sourceTarget.value}.`
    this.displayTarget.textContent = message
  }
}
