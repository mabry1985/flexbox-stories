/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FlexboxAlternatingGrid {
    }
    interface FlexboxGrid {
    }
    interface FlexboxNavBar {
        "isPattern": boolean;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLFlexboxAlternatingGridElement extends Components.FlexboxAlternatingGrid, HTMLStencilElement {
    }
    var HTMLFlexboxAlternatingGridElement: {
        prototype: HTMLFlexboxAlternatingGridElement;
        new (): HTMLFlexboxAlternatingGridElement;
    };
    interface HTMLFlexboxGridElement extends Components.FlexboxGrid, HTMLStencilElement {
    }
    var HTMLFlexboxGridElement: {
        prototype: HTMLFlexboxGridElement;
        new (): HTMLFlexboxGridElement;
    };
    interface HTMLFlexboxNavBarElement extends Components.FlexboxNavBar, HTMLStencilElement {
    }
    var HTMLFlexboxNavBarElement: {
        prototype: HTMLFlexboxNavBarElement;
        new (): HTMLFlexboxNavBarElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "flexbox-alternating-grid": HTMLFlexboxAlternatingGridElement;
        "flexbox-grid": HTMLFlexboxGridElement;
        "flexbox-nav-bar": HTMLFlexboxNavBarElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface FlexboxAlternatingGrid {
    }
    interface FlexboxGrid {
    }
    interface FlexboxNavBar {
        "isPattern"?: boolean;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "flexbox-alternating-grid": FlexboxAlternatingGrid;
        "flexbox-grid": FlexboxGrid;
        "flexbox-nav-bar": FlexboxNavBar;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "flexbox-alternating-grid": LocalJSX.FlexboxAlternatingGrid & JSXBase.HTMLAttributes<HTMLFlexboxAlternatingGridElement>;
            "flexbox-grid": LocalJSX.FlexboxGrid & JSXBase.HTMLAttributes<HTMLFlexboxGridElement>;
            "flexbox-nav-bar": LocalJSX.FlexboxNavBar & JSXBase.HTMLAttributes<HTMLFlexboxNavBarElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
