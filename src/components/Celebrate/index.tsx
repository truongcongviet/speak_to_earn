import React, { useEffect, useRef } from 'react';

interface CelebrateProps {
  isActive?: boolean;
  duration?: number;
  particleCount?: number;
  colors?: string[];
}

const Celebrate: React.FC<CelebrateProps> = ({
  isActive = true,
  duration = 3000,
  particleCount = 50,
  colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number>();

  const createParticle = (canvas: HTMLCanvasElement) => {
    const size = Math.random() * 10 + 5;
    return {
      color: colors[Math.floor(Math.random() * colors.length)],
      x: Math.random() * canvas.width,
      y: -20,
      size,
      speedX: Math.random() * 6 - 3,
      speedY: Math.random() * 2 + 2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2
    };
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.rotation += particle.rotationSpeed;

      // Add some gravity and wind effect
      particle.speedY += 0.1;
      particle.speedX += Math.random() * 0.2 - 0.1;

      // Draw particle
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      ctx.fillStyle = particle.color;
      ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
      ctx.restore();

      // Remove particles that are off screen
      if (particle.y > canvas.height + 20) {
        particlesRef.current.splice(index, 1);
      }
    });

    // Add new particles if needed
    while (particlesRef.current.length < particleCount) {
      particlesRef.current.push(createParticle(canvas));
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (isActive) {
      // Initialize particles
      particlesRef.current = Array.from({ length: particleCount }, () => 
        createParticle(canvas)
      );

      // Start animation
      animate();

      // Stop animation after duration
      if (duration) {
        setTimeout(() => {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            particlesRef.current = [];
          }
        }, duration);
      }
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, particleCount, duration]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
};

export default Celebrate;