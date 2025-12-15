import { useEffect, useRef } from 'react';

export function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Enhanced particle system for neural network
    class Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      hue: number;
      brightness: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1500;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.vz = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 3 + 1;
        this.hue = Math.random() * 60 + 220; // Blue to purple range
        this.brightness = Math.random() * 50 + 50;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        // Wrap around edges for continuous movement
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;
        if (this.z < 0) this.z = 1500;
        if (this.z > 1500) this.z = 0;
      }

      draw() {
        if (!ctx) return;
        const scale = 1000 / (1000 + this.z);
        const x = this.x * scale + canvas.width / 2 * (1 - scale);
        const y = this.y * scale + canvas.height / 2 * (1 - scale);
        const size = this.size * scale;

        // Glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
        gradient.addColorStop(0, `hsla(${this.hue}, 80%, ${this.brightness}%, ${0.6 * scale})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 70%, ${this.brightness}%, ${0.3 * scale})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 60%, ${this.brightness}%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - size * 3, y - size * 3, size * 6, size * 6);

        // Core particle
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 90%, ${this.brightness + 20}%, ${0.8 + scale * 0.2})`;
        ctx.fill();
      }
    }

    // World map dots with enhanced effects
    class WorldDot {
      lat: number;
      lon: number;
      x: number;
      y: number;
      z: number;
      pulse: number;
      speed: number;
      vz: number;

      constructor() {
        this.lat = (Math.random() - 0.5) * 150;
        this.lon = (Math.random() - 0.5) * 320;
        this.z = Math.random() * 500;
        this.x = 0;
        this.y = 0;
        this.pulse = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.02 + 0.015;
        this.vz = (Math.random() - 0.5) * 0.8;
        this.updatePosition();
      }

      updatePosition() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 3;
        const scale = 1000 / (1000 + this.z);
        this.x = centerX + this.lon * 1.8 * scale;
        this.y = centerY + this.lat * 1.4 * scale;
      }

      draw(time: number) {
        if (!ctx) return;
        this.pulse += this.speed;
        const scale = 1000 / (1000 + this.z);
        const opacity = (0.15 + Math.sin(this.pulse) * 0.25) * scale;
        const size = (1.5 + Math.sin(this.pulse * 2) * 0.5) * scale;
        
        // Glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, size * 4);
        gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity * 0.8})`);
        gradient.addColorStop(1, `rgba(139, 92, 246, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x - size * 4, this.y - size * 4, size * 8, size * 8);
        
        // Dot
        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${opacity + 0.2})`;
        ctx.fill();
      }

      update() {
        this.z += this.vz;
        if (this.z < 0) this.z = 500;
        if (this.z > 500) this.z = 0;
        this.updatePosition();
      }
    }

    // Geometric floating shapes
    class FloatingShape {
      x: number;
      y: number;
      z: number;
      rotation: number;
      rotationSpeed: number;
      size: number;
      vx: number;
      vy: number;
      type: 'triangle' | 'square' | 'hexagon';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 800 + 200;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.04;
        this.size = Math.random() * 40 + 20;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        const types: Array<'triangle' | 'square' | 'hexagon'> = ['triangle', 'square', 'hexagon'];
        this.type = types[Math.floor(Math.random() * types.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        // Wrap around for continuous movement
        if (this.x < -100) this.x = canvas.width + 100;
        if (this.x > canvas.width + 100) this.x = -100;
        if (this.y < -100) this.y = canvas.height + 100;
        if (this.y > canvas.height + 100) this.y = -100;
      }

      draw() {
        if (!ctx) return;
        const scale = 800 / (800 + this.z);
        const x = this.x;
        const y = this.y;
        const size = this.size * scale;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * scale})`;
        ctx.lineWidth = 2 * scale;
        ctx.beginPath();

        if (this.type === 'triangle') {
          ctx.moveTo(0, -size);
          ctx.lineTo(size * 0.866, size * 0.5);
          ctx.lineTo(-size * 0.866, size * 0.5);
          ctx.closePath();
        } else if (this.type === 'square') {
          ctx.rect(-size / 2, -size / 2, size, size);
        } else {
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const px = Math.cos(angle) * size;
            const py = Math.sin(angle) * size;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
        }

        ctx.stroke();
        ctx.restore();
      }
    }

    // Energy waves
    class EnergyWave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      opacity: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 300;
        this.opacity = 1;
      }

      update() {
        this.radius += 2;
        this.opacity = 1 - this.radius / this.maxRadius;
        return this.radius < this.maxRadius;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${this.opacity * 0.3})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    const particles: Particle[] = [];
    const worldDots: WorldDot[] = [];
    const shapes: FloatingShape[] = [];
    const waves: EnergyWave[] = [];

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle());
    }

    // Create world map dots
    for (let i = 0; i < 600; i++) {
      worldDots.push(new WorldDot());
    }

    // Create floating shapes
    for (let i = 0; i < 15; i++) {
      shapes.push(new FloatingShape());
    }

    let animationId: number;
    let time = 0;

    // Create waves on click
    canvas.addEventListener('mousemove', (e) => {
      if (Math.random() > 0.95) {
        waves.push(new EnergyWave(e.clientX, e.clientY));
      }
    });

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      // Draw energy waves
      for (let i = waves.length - 1; i >= 0; i--) {
        if (!waves[i].update()) {
          waves.splice(i, 1);
        } else {
          waves[i].draw();
        }
      }

      // Draw world map dots
      worldDots.forEach(dot => {
        dot.update();
        dot.draw(time);
      });

      // Draw floating shapes
      shapes.forEach(shape => {
        shape.update();
        shape.draw();
      });

      // Draw and update particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw enhanced connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            const opacity = (1 - distance / 180) * 0.4;
            gradient.addColorStop(0, `hsla(${particles[i].hue}, 80%, 60%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${particles[j].hue}, 80%, 60%, ${opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      worldDots.forEach(dot => dot.updatePosition());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}