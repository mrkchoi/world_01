import { Canvas } from '@react-three/fiber';
import './App.css';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <div className="fixed left-0 top-0 h-screen w-full">
        <Canvas shadows>
          <Experience />
        </Canvas>
      </div>
    </>
  );
}

export default App;
