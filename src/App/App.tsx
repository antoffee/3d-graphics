import React from 'react';
import { Canvas } from '@react-three/fiber';

import { Box } from 'components/Box';

export const App: React.FC = () => {
    return (
        <div>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[0, 0, 0]} />
            </Canvas>
            ,
        </div>
    );
};
