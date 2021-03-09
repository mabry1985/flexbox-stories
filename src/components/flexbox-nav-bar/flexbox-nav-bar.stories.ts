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
        `;
}