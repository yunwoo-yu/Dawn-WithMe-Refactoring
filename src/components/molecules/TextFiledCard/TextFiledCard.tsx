import { ChangeEvent, FocusEvent } from 'react';
import TextFiled from '../../atoms/Input/TextFiled/TextFiled';
import TextLabel from '../../atoms/Label/TextLabel/TextLabel';

import TextFiledCardWrapper from './styled';

interface Props {
  children?: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  id?: string;
  name?: string;
  autoFocus?: boolean;
  min?: number;
  max?: number;
}

const TextFiledCard = ({
  children,
  type,
  onChange,
  onBlur,
  value,
  placeholder,
  id,
  name,
  autoFocus,
  min,
  max,
}: Props) => {
  return (
    <TextFiledCardWrapper>
      <TextLabel htmlFor={id}>{children}</TextLabel>
      <TextFiled
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        min={min}
        max={max}
      />
    </TextFiledCardWrapper>
  );
};

export default TextFiledCard;
