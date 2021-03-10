export default {
  title: 'Flexbox Patterns/Flexbox Stretch',
  component: 'flexbox-stretch',
};

export const FlexboxStretch = () => {
  return `
            <flexbox-stretch></flexbox-stretch>
            <code-block>
            .container {
                 display: flex;
            }

            .flex-item {
                background: #42E629;
                flex-grow: 1;
                height: 100px;
            }

            .flex-item:nth-child(odd) {
                background: #36A7E3;
                flex-grow: 2;
            }

            .flex-item + .flex-item {
                margin-left: 2%;
            }
            </code-block>
        `;
};
