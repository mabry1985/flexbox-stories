export default {
  title: 'Flexbox Patterns/Flexbox Alternating Alignment',
  component: 'flexbox-alternating-alignment',
};

export const FlexboxAlternatingAlignment = () => {
  return `
    <flexbox-alternating-alignment></flexbox-alternating-alignment>
    <code-block>
        .container {
            display: flex;
            height: 400px;
        }

        .flex-item {
            align-self: flex-start;
            background: #B173FF;
            flex-grow: 1;
            height: 50%;
        }

        .flex-item:nth-child(odd) {
            align-self: flex-end;
            background: #60EB52;
        }    
    </code-block>
    `;
};
