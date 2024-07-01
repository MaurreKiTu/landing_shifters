import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheelComponent } from "../components/wheel.component";

@Component({
    standalone: true,
    template: `
    <h1>{{title}}</h1>
    <wheel-comp/>
  `,
    imports: [CommonModule, WheelComponent]
})
export default class WheelRoute {
  title = 'wheel-route';
}
