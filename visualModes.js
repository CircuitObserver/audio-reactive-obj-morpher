/**
 * WMP ENGINE PRO - REFINED VISUAL MODES REGISTRY
 * ---------------------------------------------------------
 * Tailored exclusively around volumetric expansion, multi-axis plasma warping,
 * tier-based structural twists, and fluid magnetic flow fields.
 */

window.WMP_MODES = [
    // --- YOUR FAVORITE ORIGINAL MODES (Renumbered 0 to 4) ---
    {
        id: 0,
        name: "Spherical Pulse", // Original ID 0
        execute: function(p) {
            let disp = Math.sin(p.dist * 0.5 - p.time * 3) * (p.audio.low * 4);
            let ratio = p.dist > 0 ? (p.dist + disp) / p.dist : 1;
            return { x: p.x * ratio, y: p.y * ratio, z: p.z * ratio };
        }
    },
    {
        id: 1,
        name: "Plasma Field Displacer", // Original ID 10
        execute: function(p) {
            let waveA = Math.sin(p.x * 0.3 + p.time * 2.5) * 2.0;
            let waveB = Math.cos(p.y * 0.3 - p.time * 1.8) * 2.0;
            let waveC = Math.sin(p.z * 0.3 + p.time * 3.1) * 2.0;
            let intensity = p.audio.mid * 3.5;
            return {
                x: p.x + waveB * intensity,
                y: p.y + waveC * intensity,
                z: p.z + waveA * intensity
            };
        }
    },
    {
        id: 2,
        name: "Kinematic Gear Twist", // Original ID 16
        execute: function(p) {
            let tier = Math.floor(p.y / 2.0);
            let direction = (tier % 2 === 0) ? 1 : -1;
            let rotationVelocity = p.time * 1.2 + (p.audio.mid * 5.0 * direction);
            let cA = Math.cos(rotationVelocity), sA = Math.sin(rotationVelocity);
            return {
                x: p.x * cA - p.z * sA,
                y: p.y,
                z: p.x * sA + p.z * cA
            };
        }
    },
    {
        id: 3,
        name: "Magnetic Field Lines", // Original ID 20
        execute: function(p) {
            let theta = (p.index / 25000) * Math.PI * 2;
            let loopRadius = p.dist * (1.0 + p.audio.high * 0.8);
            return {
                x: p.x + Math.sin(theta) * (p.audio.mid * 3.0),
                y: p.y + Math.sin(p.x * 0.1 + p.time * 3.0) * (p.audio.low * 2.0),
                z: p.z + Math.cos(theta) * (p.audio.mid * 3.0)
            };
        }
    },
    {
        id: 4,
        name: "Digital Soundwave Fountain", // Original ID 21
        execute: function(p) {
            let binValue = p.audio.frequencyData ? p.audio.frequencyData[p.index % 128] / 255 : 0.2;
            let speedY = p.y + (p.time * 10.0) + (binValue * 8.0);
            let wrappedY = ((speedY + 15) % 30) - 15;
            return {
                x: p.x * (1.0 + binValue * 1.2),
                y: wrappedY,
                z: p.z * (1.0 + binValue * 1.2)
            };
        }
    },

    // --- 15 NEW EXPANDED MODES INSPIRED BY YOUR FAVORITES ---

    {
        id: 5,
        name: "Hyperbolic Torus Expander",
        execute: function(p) {
            // Expanded Volumetric: Warps the shell into a bulging donut topology driven by sub-bass
            let angle = Math.atan2(p.z, p.x);
            let twist = Math.sin(angle * 3.0 + p.time * 2.0) * (p.audio.sub * 4.0);
            let ratio = (p.dist + twist) / (p.dist || 1);
            return {
                x: p.x * ratio,
                y: p.y + Math.cos(p.dist * 0.4 - p.time * 3.0) * (p.audio.low * 3.0),
                z: p.z * ratio
            };
        }
    },
    {
        id: 6,
        name: "Nebula Fluidic Turbulence",
        execute: function(p) {
            // Plasma Variant: Employs three interlaced cosine fields to simulate churning solar wind
            let fX = Math.cos(p.y * 0.25 + p.time) * (p.audio.mid * 4.0);
            let fY = Math.sin(p.z * 0.35 - p.time * 1.5) * (p.audio.low * 4.0);
            let fZ = Math.cos(p.x * 0.45 + p.time * 2.0) * (p.audio.high * 4.0);
            return { x: p.x + fX, y: p.y + fY, z: p.z + fZ };
        }
    },
    {
        id: 7,
        name: "Helix Helical Shearing",
        execute: function(p) {
            // Gear Twist Variant: Slices the model into thin vertical strata that slice laterally 
            let tier = Math.floor(p.y * 2.0); 
            let offset = Math.sin(tier * 0.4 + p.time * 4.0) * (p.audio.mid * 3.5);
            return {
                x: p.x + offset,
                y: p.y,
                z: p.z + Math.cos(tier * 0.4 + p.time * 4.0) * (p.audio.mid * 3.5)
            };
        }
    },
    {
        id: 8,
        name: "Quantum Flow Matrix",
        execute: function(p) {
            // Field Lines Variant: Channels particles into interlocking orbital streams mapping treble transients
            let rad = Math.sqrt(p.x * p.x + p.z * p.z) || 1;
            let flow = Math.sin(p.y * 0.2 + p.time * 3.0) * (p.audio.high * 5.0);
            return {
                x: p.x * (1.0 + flow / rad),
                y: p.y + Math.cos(rad * 0.3 - p.time * 2.0) * (p.audio.low * 2.5),
                z: p.z * (1.0 + flow / rad)
            };
        }
    },
    {
        id: 9,
        name: "Geyser Acoustic Cascade",
        execute: function(p) {
            // Fountain Variant: Erupts particles outwards from the equator, cascading them back over time
            let bin = p.audio.frequencyData ? p.audio.frequencyData[p.index % 64] / 255 : 0.5;
            let upwardV = p.y + (p.time * 8.0) + (bin * 12.0);
            let yWrap = ((upwardV + 20) % 40) - 20;
            let flare = Math.cos(yWrap * 0.1) * (p.audio.sub * 6.0);
            return { x: p.x + (p.x / (p.dist || 1)) * flare, y: yWrap, z: p.z + (p.z / (p.dist || 1)) * flare };
        }
    },
    {
        id: 10,
        name: "Supernova Core Venting",
        execute: function(p) {
            // Volumetric Expansion: Spherical projection combined with a directional explosive engine
            let force = Math.sin(p.dist * 0.2 - p.time * 5.0) * (p.audio.sub * 6.5);
            let vX = p.x / (p.dist || 1), vY = p.y / (p.dist || 1), vZ = p.z / (p.dist || 1);
            return {
                x: p.x + vX * force + Math.sin(p.time) * (p.audio.high * 2.0),
                y: p.y + vY * force,
                z: p.z + vZ * force + Math.cos(p.time) * (p.audio.high * 2.0)
            };
        }
    },
    {
        id: 11,
        name: "Thermonuclear Distortion",
        execute: function(p) {
            // Plasma Variant: Distorts positions globally using heavy cross-trigonometric phase modulations
            let intensity = p.audio.low * 4.5;
            let dX = Math.sin(p.y + p.time) * Math.cos(p.z + p.time);
            let dY = Math.sin(p.z + p.time) * Math.cos(p.x + p.time);
            let dZ = Math.sin(p.x + p.time) * Math.cos(p.y + p.time);
            return { x: p.x + dX * intensity, y: p.y + dY * intensity, z: p.z + dZ * intensity };
        }
    },
    {
        id: 12,
        name: "Sinusoidal Tier Cyclone",
        execute: function(p) {
            // Gear Twist Variant: Smoothly modulates rotation over a continuous vertical sine curve
            let angle = Math.sin(p.y * 0.15 + p.time) * (p.audio.mid * 4.0);
            let cA = Math.cos(angle), sA = Math.sin(angle);
            return {
                x: p.x * cA - p.z * sA,
                y: p.y + Math.sin(p.dist * 0.5) * (p.audio.high * 1.5),
                z: p.x * sA + p.z * cA
            };
        }
    },
    {
        id: 13,
        name: "Electromagnetic Vortex",
        execute: function(p) {
            // Field Lines Variant: Spirals points inward/outward along sweeping polar field traps
            let phi = Math.atan2(p.z, p.x) + p.time + (p.audio.low * 2.0);
            let hMod = Math.sin(p.y * 0.3) * (p.audio.mid * 5.0);
            let rad = p.dist + hMod;
            return {
                x: Math.cos(phi) * rad,
                y: p.y * (1.0 + p.audio.high * 0.5),
                z: Math.sin(phi) * rad
            };
        }
    },
    {
        id: 14,
        name: "Volcanic Ion Fountain",
        execute: function(p) {
            // Fountain Variant: Shoots coordinates upward, flaring outward exponentially near the crest
            let bounce = p.y + (p.time * 14.0) + (Math.sin(p.index) * 5.0);
            let wrappedY = ((bounce + 15) % 30) - 15;
            let flareFactor = Math.max(0.1, (wrappedY + 15) * 0.15) * (p.audio.mid * 1.8);
            return {
                x: p.x * (1.0 + flareFactor),
                y: wrappedY,
                z: p.z * (1.0 + flareFactor)
            };
        }
    },
    {
        id: 15,
        name: "Bessel Wave Rippler",
        execute: function(p) {
            // Volumetric Expansion: Uses decaying wave ripples expanding out from the origin
            let r = Math.sqrt(p.x*p.x + p.z*p.z) || 1;
            let ripple = Math.sin(r * 0.6 - p.time * 4.5) * (p.audio.sub * 5.0);
            return { x: p.x * (1.0 + ripple/r), y: p.y + ripple, z: p.z * (1.0 + ripple/r) };
        }
    },
    {
        id: 16,
        name: "Solar Flare Filament",
        execute: function(p) {
            // Plasma Variant: Creates high-frequency geographic ripples wrapping around the geometries
            let sF = p.audio.frequencyData ? p.audio.frequencyData[p.index % 128] / 255 : 0.5;
            let warp = Math.sin(p.x * 0.5 + p.time * 3.0) * Math.cos(p.z * 0.5 + p.time * 2.0) * (sF * 5.0);
            return { x: p.x + warp, y: p.y + warp, z: p.z + warp };
        }
    },
    {
        id: 17,
        name: "Contra Planetary Gyro",
        execute: function(p) {
            // Gear Twist Variant: Splits translation rotation strictly via X/Y/Z quadrant boundaries
            let rotX = (p.z > 0 ? 1 : -1) * (p.time * 0.8 + p.audio.low * 3.0);
            let cX = Math.cos(rotX), sX = Math.sin(rotX);
            return {
                x: p.x,
                y: p.y * cX - p.z * sX,
                z: p.y * sX + p.z * cX
            };
        }
    },
    {
        id: 18,
        name: "Aurora Curvature Field",
        execute: function(p) {
            // Field Lines Variant: Sweeps coordinates back and forth in elegant overlapping ribbons
            let wave = Math.sin(p.y * 0.1 + p.time * 1.5) * (p.audio.mid * 6.0);
            return {
                x: p.x + wave,
                y: p.y,
                z: p.z + Math.cos(p.y * 0.1 + p.time * 1.5) * (p.audio.high * 4.0)
            };
        }
    },
    {
        id: 19,
        name: "Chrono Cyber Stream",
        execute: function(p) {
            // Fountain Variant: Horizontal projection streaming, pushing audio density downstream
            let bin = p.audio.frequencyData ? p.audio.frequencyData[p.index % 32] / 255 : 0.5;
            let streamX = p.x + (p.time * 12.0) + (bin * 4.0);
            let wrapX = ((streamX + 25) % 50) - 25;
            return {
                x: wrapX,
                y: p.y + Math.sin(p.x * 0.2 + p.time * 4.0) * (p.audio.low * 2.0),
                z: p.z + Math.cos(p.x * 0.2 + p.time * 4.0) * (p.audio.low * 2.0)
            };
        }
    }
];

// Helper utility injection for fractional precision handling
Math.fract = function(number) { return number - Math.floor(number); };