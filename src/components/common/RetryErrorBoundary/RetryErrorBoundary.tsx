import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryWrapper from './styled';

const RetryErrorBoundary = ({ children }: PropsWithChildren<unknown>) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => {
        return (
          <ErrorBoundaryWrapper>
            <p>데이터를 불러오는데 실패했습니다.</p>
            <button type='submit' onClick={resetErrorBoundary}>
              다시 시도
            </button>
          </ErrorBoundaryWrapper>
        );
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default RetryErrorBoundary;
