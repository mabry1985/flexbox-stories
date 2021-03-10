export default {
  title: 'Flexbox Patterns/Flexbox Grid',
  component: 'flexbox-grid',
};

export const FlexboxGrid = () => {
  return `
    <flexbox-grid></flexbox-grid>
    <code-block>
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .flex-item {
            background: #77ED9C;
            flex: 0 32%;
            height: 100px;
            margin-bottom: 2%; /* (100-32*3)/2 */
        }

        .flex-item:nth-child(3n) {
            background: #F7F37C;
        }

        .flex-item:nth-child(3n-1) {
            background: #F77CB4;
        }
    </code-block>
    `;
};
