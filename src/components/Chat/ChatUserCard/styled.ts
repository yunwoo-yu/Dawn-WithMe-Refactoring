import styled, { css } from 'styled-components';

const ChatUserCardWrapper = styled.li`
  padding: 2px 0 3px 0;
  display: flex;
  align-items: center;
  gap: 18px;

  div:nth-child(1) {
    line-height: 0;
    position: relative;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .none-read {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    ${({ theme }) => {
      return css`
        background-color: ${theme.colors.colorMain};
      `;
    }}
  }

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorBg};

      .preview-last-chat {
        font-size: ${theme.fontSizes.smallMid};
        color: ${theme.colors.colorBorder};
        font-weight: 400;
        line-height: 15px;
      }

      .date-last-chat {
        font-size: ${theme.fontSizes.small};
        color: ${theme.colors.color76};
        font-weight: 400;
        align-self: end;
        line-height: 13px;
        margin-left: auto;
      }

      .user-name {
        color: ${theme.colors.colorBorder};
        font-weight: 500;
        font-size: ${theme.fontSizes.base};
      }
    `;
  }}
`;

export default ChatUserCardWrapper;
