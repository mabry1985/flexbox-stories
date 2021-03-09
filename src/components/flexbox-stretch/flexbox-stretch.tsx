import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'flexbox-stretch',
  styleUrl: 'flexbox-stretch.css',
  shadow: true,
})
export class FlexboxStretch {
  render() {
    return (
      <Host>
        <div class="container">
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
