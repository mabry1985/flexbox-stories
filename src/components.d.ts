/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FlexboxAlternatingAlignment {
    }
    interface FlexboxAlternatingGrid {
    }
    interface FlexboxFixedGrid {
    }
    interface FlexboxGrid {
    }
    interface FlexboxNavBar {
        "isPattern": boolean;
    }
    interface FlexboxStretch {
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
    interface HTMLFlexboxAlternatingAlignmentElement extends Components.FlexboxAlternatingAlignment, HTMLStencilElement {
    }
    var HTMLFlexboxAlternatingAlignmentElement: {
        prototype: HTMLFlexboxAlternatingAlignmentElement;
        new (): HTMLFlexboxAlternatingAlignmentElement;
    };
    interface HTMLFlexboxAlternatingGridElement extends Components.FlexboxAlternatingGrid, HTMLStencilElement {
    }
    var HTMLFlexboxAlternatingGridElement: {
        prototype: HTMLFlexboxAlternatingGridElement;
        new (): HTMLFlexboxAlternatingGridElement;
    };
    interface HTMLFlexboxFixedGridElement extends Components.FlexboxFixedGrid, HTMLStencilElement {
    }
    var HTMLFlexboxFixedGridElement: {
        prototype: HTMLFlexboxFixedGridElement;
        new (): HTMLFlexboxFixedGridElement;
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
    interface HTMLFlexboxStretchElement extends Components.FlexboxStretch, HTMLStencilElement {
    }
    var HTMLFlexboxStretchElement: {
        prototype: HTMLFlexboxStretchElement;
        new (): HTMLFlexboxStretchElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "flexbox-alternating-alignment": HTMLFlexboxAlternatingAlignmentElement;
        "flexbox-alternating-grid": HTMLFlexboxAlternatingGridElement;
        "flexbox-fixed-grid": HTMLFlexboxFixedGridElement;
        "flexbox-grid": HTMLFlexboxGridElement;
        "flexbox-nav-bar": HTMLFlexboxNavBarElement;
        "flexbox-stretch": HTMLFlexboxStretchElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface FlexboxAlternatingAlignment {
    }
    interface FlexboxAlternatingGrid {
    }
    interface FlexboxFixedGrid {
    }
    interface FlexboxGrid {
    }
    interface FlexboxNavBar {
        "isPattern"?: boolean;
    }
    interface FlexboxStretch {
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
        "flexbox-alternating-alignment": FlexboxAlternatingAlignment;
        "flexbox-alternating-grid": FlexboxAlternatingGrid;
        "flexbox-fixed-grid": FlexboxFixedGrid;
        "flexbox-grid": FlexboxGrid;
        "flexbox-nav-bar": FlexboxNavBar;
        "flexbox-stretch": FlexboxStretch;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "flexbox-alternating-alignment": LocalJSX.FlexboxAlternatingAlignment & JSXBase.HTMLAttributes<HTMLFlexboxAlternatingAlignmentElement>;
            "flexbox-alternating-grid": LocalJSX.FlexboxAlternatingGrid & JSXBase.HTMLAttributes<HTMLFlexboxAlternatingGridElement>;
            "flexbox-fixed-grid": LocalJSX.FlexboxFixedGrid & JSXBase.HTMLAttributes<HTMLFlexboxFixedGridElement>;
            "flexbox-grid": LocalJSX.FlexboxGrid & JSXBase.HTMLAttributes<HTMLFlexboxGridElement>;
            "flexbox-nav-bar": LocalJSX.FlexboxNavBar & JSXBase.HTMLAttributes<HTMLFlexboxNavBarElement>;
            "flexbox-stretch": LocalJSX.FlexboxStretch & JSXBase.HTMLAttributes<HTMLFlexboxStretchElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
