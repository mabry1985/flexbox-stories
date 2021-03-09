import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'flexbox-nav-bar',
  styleUrl: 'flexbox-nav-bar.css',
  shadow: true,
})
export class FlexboxNavBar {
  @Prop({ reflect: true }) isPattern: boolean = false;

  render() {
    return (
      <Host>
        <div class="container">
          <div class="logo" >
            <slot name="logo" />
          </div>
          <div class="nav" >
            <div class="nav-links">
              <slot name="nav-links" />
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
