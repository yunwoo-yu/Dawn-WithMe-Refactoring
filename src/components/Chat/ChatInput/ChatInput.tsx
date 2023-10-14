import { ChangeEvent, FormEvent } from 'react';
import ChatInputWrapper from './styled';

interface ChatInputProps {
  chatValue: { image: string; text: string };
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => void;
}

const ChatInput = ({ chatValue, onChange, onSubmit }: ChatInputProps) => {
  const { image, text } = chatValue;

  return (
    <ChatInputWrapper onSubmit={onSubmit}>
      <div>
        <label htmlFor='input-file'>
          <input
            type='file'
            accept='image/*'
            name='image'
            id='input-file'
            defaultValue={image}
            onChange={onChange}
          />
        </label>
      </div>
      <div>
        <input
          type='text'
          name='text'
          id='input-text'
          placeholder='메시지 입력하기...'
          value={text}
          onChange={onChange}
        />
        <button type='submit' disabled={chatValue.image.length < 1 && chatValue.text.length < 1}>
          전송
        </button>
      </div>
    </ChatInputWrapper>
  );
};

export default ChatInput;
