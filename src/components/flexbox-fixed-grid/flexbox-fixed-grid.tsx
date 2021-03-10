import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'flexbox-fixed-grid',
  styleUrl: 'flexbox-fixed-grid.css',
  shadow: true,
})
export class FlexboxFixedGrid {

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
