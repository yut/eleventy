
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "name", "display" ]

  greet() {
    const greeting = `Hello, ${this.name}!`
    console.log(greeting)
    this.displayTarget.textContent = greeting
  }

  get name() {
    return this.nameTarget.value || 'No Name'
  }

}
