import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wheel-comp',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="circle">
      <div class="slice"></div>
      <div class="slice"></div>
      <div class="slice"></div>
      <div class="slice"></div>
    </div>
    <button onclick="spinWheel()">Spin the Wheel</button>
  `,
})
export class WheelComponent {
  title = 'WheelComp';

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  spinWheel() {
    const wheel = document.getElementById('spinningWheel');
    const button = document.querySelector('button');
    if (!button || !wheel) {
      console.error('Button or wheel not found.');
      return;
    }
    // Disable the button during the spin to prevent multiple spins
    button.disabled = true;

    // Calculate a random rotation for the wheel (between 720 and 1440 degrees)
    const randomRotation = Math.floor(Math.random() * 720) + 720;

    // Apply the rotation to the wheel using the transform property
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // After 2 seconds, enable the button, reset the wheel's rotation, and pick a random item
    setTimeout(() => {
      button.disabled = false;
      wheel.style.transform = 'rotate(0deg)';

      // Calculate the selected item based on the wheel's rotation
      const selectedItemIndex = Math.floor(
        (randomRotation % 360) / (360 / this.items.length)
      );
      const selecteditem = this.items[selectedItemIndex];

      // Display or use the selected item as needed
      alert(`Selected Item: ${selecteditem}`);
    }, 2000);
  }
}
