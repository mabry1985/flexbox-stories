export default {
  title: 'Flexbox Patterns/Flexbox Fixed Grid',
  component: 'flexbox-fixed-grid',
};

export const FlexboxFixedGrid = () => {
  return `
    <flexbox-fixed-grid></flexbox-fixed-grid>
    <code-block>
        .container {
            display: flex;
            flex-wrap: wrap;
        }

        .flex-item {
            background: #F7B56A;
            padding-bottom: 29%; /* A hack to set height */
            margin: 2% 2%;
            width: 29%;
        }

        .flex-item:nth-child(3n) {
            background: #E06B93; 
        }

        .flex-item:nth-child(3n-1) {
            background: #57EFF2;
        }
    </code-block>
    `;
};
