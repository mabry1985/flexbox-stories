import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'code-block',
  styleUrl: 'code-block.css',
  shadow: true,
})
export class CodeBlock {

  render() {
    return (
      <Host>
        <pre>
          <code>
            <slot></slot>
          </code>
        </pre>
      </Host>
    );
  }

}
