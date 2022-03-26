
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "menu" ]

  toggle() {
    this.menuTarget.classList.toggle('hidden')
  }

  // If the click is outside a menu, hide any visible menus.
  hide() {
    var menus = document.querySelectorAll("[data-menu-target='menu']");
    menus.forEach(menu=>{
      if(!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
      }
    })
  }
}
