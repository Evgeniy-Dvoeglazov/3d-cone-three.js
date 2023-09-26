import './App.css';
import '../Canvas/Canvas.css';
import Cone from '../Cone/Cone';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className='app'>
      <Canvas className='canvas'>
        <OrbitControls />
        <ambientLight intensity={.7} />
        <directionalLight position={[-2, 5, 2]} />
        <Cone />
      </Canvas>
    </div>
  );
}

export default App;
