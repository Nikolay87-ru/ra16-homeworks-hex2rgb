import type { FC } from 'react';
import HexInput from './components/HexInput';
import useHexToRgb from './components/useHexToRgb';
import './index.css';

const App: FC = () => {
  const { input, rgb, updateInput } = useHexToRgb();

  return (
    <>
    <div className="app" style={{ background: rgb }}>
      <HexInput 
        value={input} 
        onChange={updateInput} 
        rgb={rgb} 
      />
    </div>
    </>
  );
};

export default App;
