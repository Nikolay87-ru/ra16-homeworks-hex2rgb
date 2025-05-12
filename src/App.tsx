import type { FC } from 'react';
import HexInput from './components/HexInput';
import useHexToRgb from './components/useHexToRgb';
import './index.css';

const App: FC = () => {
  const { input, rgb, isError, updateInput } = useHexToRgb();

  return (
    <div
      className='app'
      style={{
        background: isError ? 'rgb(143, 6, 6)' : input.length === 7 ? rgb : 'rgb(255, 255, 255)',
      }}
    >
      <HexInput
        value={input}
        onChange={updateInput}
        rgb={isError ? 'Ошибка!' : input.length === 7 ? rgb : 'rgb(255, 255, 255)'}
      />
    </div>
  );
};

export default App;
