export default {
    title: 'Flexbox Patterns/Flexbox Navbar',
    component: 'flexbox-nav-bar-pattern'
}

export const FlexboxNavbar = () => {
    return `
        <flexbox-nav-bar isPattern></flexbox-nav-bar>
        <flexbox-nav-bar>
            <p slot="logo">Logo</p>
            <a slot="nav-links" href="#">Home</a>
            <a slot="nav-links" href="#">Projects</a>
            <a slot="nav-links" href="#">About</a>
        </flexbox-nav-bar>
        <code-block>
            .container {
                display: flex;
                padding: 10px;
            }

            .logo {
                align-items: center;
                border: solid 1px #FFF357;
                border-radius: 5px 0 0 5px;
                height: 100px;
                justify-content: center;
                margin-right: 4px;
                width: 120px;
                display: flex;
            }
 
            .nav {
                border: solid 1px #FF8A64;
                border-radius: 0 5px 5px 0;
                align-content: center;
                flex-grow: 1;
                width: 120px;
            }

            .nav-links {
                display: flex;
                height: 100px;
                justify-content: flex-end;
                margin-right: 15px;

            }
        </code-block>
        `;
}