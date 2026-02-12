import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-valentine',
  templateUrl: './valentine.component.html',
  styleUrls: ['./valentine.component.css']
})
export class ValentineComponent {
   @ViewChild('noButton') noButton!: ElementRef;

  accepted = false;
  showModal = false;
  hearts = Array(25).fill(0);

  private hoverTimer: any = null;

  sayYes() {
    this.accepted = true;

    // ✅ Cancel NO button timer if running
    if (this.hoverTimer) {
      clearTimeout(this.hoverTimer);
      this.hoverTimer = null;
    }
  }

moveButton() {
    setTimeout(() => {
    // existing move code
     const button = this.noButton.nativeElement;

  // Get viewport size
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  // Leave some margin so it doesn't touch the edges
  const margin = 20;

  // Calculate max possible position
  const maxX = viewportWidth - buttonWidth - margin;
  const maxY = viewportHeight - buttonHeight - margin;

  // Random position within bounds
  const randomX = Math.floor(Math.random() * maxX) + margin / 2;
  const randomY = Math.floor(Math.random() * maxY) + margin / 2;

  button.style.position = 'fixed'; // fixed relative to viewport
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;

  // Start timer if not running
  if (!this.hoverTimer) {
    this.hoverTimer = setTimeout(() => {
      if (!this.accepted) {
        this.showModal = true;
      }
      this.hoverTimer = null;
    }, 3000);
  }
  }, 50);
 
}



  closeModal() {
    this.showModal = false;

    // Reset hover timer just in case
    if (this.hoverTimer) {
      clearTimeout(this.hoverTimer);
      this.hoverTimer = null;
    }
  }

}
