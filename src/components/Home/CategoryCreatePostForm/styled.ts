import styled from 'styled-components';

const CategoryCreatePostFormWrapper = styled.form`
  text-align: left;

  p {
    color: ${({ theme }) => theme.colors.colorBorder};
    font-size: ${({ theme }) => theme.fontSizes.smallMid};
    margin-bottom: 18px;
  }

  select {
    margin: 30px 0 16px;
    color: black;
  }

  > div.input-box {
    margin-bottom: 16px;
  }

  .error-message {
    vertical-align: middle;
    margin-left: 8px;
    font-size: ${({ theme }) => theme.fontSizes.smallMid};
    color: ${({ theme }) => theme.colors.colorWarning};

    &.image-error {
      margin-bottom: 0;
      margin-top: 16px;
    }
  }
`;

export default CategoryCreatePostFormWrapper;
