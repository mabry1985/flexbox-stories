import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'flexbox-alternating-grid',
  styleUrl: 'flexbox-alternating-grid.css',
  shadow: true,
})
export class FlexboxAlternatingGrid {

  render() {
    return (
      <Host>
        <div class="container">
          <div class="flex-item"></div>
          <div class="flex-item"></div>
          <div class="flex-item"></div>
          <div class="flex-item"></div>
          <div class="flex-item"></div>
          <div class="flex-item"></div>
        </div>
      </Host>
    );
  }

}
