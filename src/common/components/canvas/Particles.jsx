import React from "react"

import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ParticlesComponent = () => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const particlesInit = async main => {
        await loadFull(main)
    }

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                height="100vh"
                options={{
                    background: {
                        // color: "#000"
                    },
                    fullScreen: {
                        enable: false
                    },
                    detectRetina: false,
                    fpsLimit: 30,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            resize: true
                        }
                    },
                    particles: {
                        color: {
                            value: "#fff"
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1080
                            },
                            limit: 0,
                            value: 400
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.05,
                                speed: 0.25,
                                sync: false
                            },
                            random: {
                                enable: true,
                                minimumValue: 0.05
                            },
                            value: 1
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 0.5
                            },
                            value: 1
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 0.5,
                            straight: false,
                        },
                    }
                }}
            />
        </div>
    )
}
