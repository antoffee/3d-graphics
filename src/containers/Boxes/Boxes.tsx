import React from 'react';
import { Canvas } from '@react-three/fiber';

import { Box } from 'components/Box';

export const Boxes: React.FC = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 0, 0]} />
            <Box position={[10, 0, -10]} />
            <Box position={[-5, 0, 1]} />
        </Canvas>
    );
};
