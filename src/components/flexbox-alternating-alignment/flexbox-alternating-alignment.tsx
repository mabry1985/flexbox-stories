import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'flexbox-alternating-alignment',
  styleUrl: 'flexbox-alternating-alignment.css',
  shadow: true,
})
export class FlexboxAlternatingAlignment {

  render() {
    return (
      <Host>
        <div class="container" >
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
