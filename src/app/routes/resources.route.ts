import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: ` resources `,
})
export default class ResourcesRoute {
  title = 'resources-route';
}
