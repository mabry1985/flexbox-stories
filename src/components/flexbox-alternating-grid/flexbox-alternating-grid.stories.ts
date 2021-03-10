export default {
  title: 'Flexbox Patterns/Flexbox Alternating Grid',
  component: 'flexbox-alternating-grid',
};

export const FlexboxAlternatingGrid = () => {
  return `
    <flexbox-alternating-grid></flexbox-alternating-grid>
    <code-block>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .flex-item {
        background: #729BF7;
        height: 100px;
        margin-bottom: 2%;
        width: 48%;
    }

    .flex-item:nth-child(3n) {
        background: #E7F772;
        width: 100%;
    }
    </code-block>
    `;
};
