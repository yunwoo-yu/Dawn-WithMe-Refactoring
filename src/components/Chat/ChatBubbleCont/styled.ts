import styled, { css } from 'styled-components';

export const ChatBubbleContWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  .time {
    ${({ theme }) => {
      return css`
        color: ${theme.colors.color76};
        font-weight: 400;
        font-size: ${theme.fontSizes.small};
      `;
    }}
  }
`;

const bubbleStyles = css`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 400;
  line-height: 18px;
`;

export const ChatText = styled.span<{ user: string }>`
  ${({ user, theme }) => css`
    ${bubbleStyles}
    color: ${user === 'ibubble' ? theme.colors.colorWhite : '#000000'};
    background-color: ${user === 'ibubble' ? theme.colors.colorMain : theme.colors.colorWhite};
    padding: 12px;
    border-radius: 10px;

    ${user === 'ibubble' ? 'border-top-right-radius: 0px; margin-left: 6px;' : ''}
    ${user === 'yoububble'
      ? 'border: 1px solid ' +
        theme.colors.colorBorder +
        '; border-top-left-radius: 0px; margin-right: 6px;'
      : ''}
  `}
`;
