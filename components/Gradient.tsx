import { useEffect } from 'react';
import Granim from 'granim';
import styled from '@emotion/styled';
import gradients from '../utils/gradients';

const GranimCanvas = styled.canvas`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
`;

export default function Gradient() {
    const startGranim = () => {
        new Granim({
            element: '#g-canvas',
            direction: 'diagonal',
            stateTransitionSpeed: 2000,
            states: {
                "default-state": {
                    gradients
                }
            }
        });
    }

    useEffect(() => {
        startGranim();
    }, []);

    return <GranimCanvas id="g-canvas" />
}
