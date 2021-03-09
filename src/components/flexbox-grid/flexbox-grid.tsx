import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'flexbox-grid',
  styleUrl: 'flexbox-grid.css',
  shadow: true,
})
export class FlexboxGrid {

  render() {
    return (
      <Host>
        <div class="container">
          <div class="flex-item" />
          <div class="flex-item" />
          <div class="flex-item" />
          <div class="flex-item" />
          <div class="flex-item" />
          <div class="flex-item" />
          <div class="flex-item" />
          <div class="flex-item" />
          <div class="flex-item" />
        </div>
      </Host>
    );
  }

}
