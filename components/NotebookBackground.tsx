import React, { useEffect, useRef } from 'react';

const NotebookBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Math symbols and formulas to randomly place - MOVED BEFORE USAGE
        const mathSymbols = [
            '∫', '∑', '∏', 'π', '√', 'Δ', '∞', '≠', '≈', '±',
            'y=mx+b', 'E=mc²', 'f(x)=ax²+bx+c', 'a²+b²=c²', 'sin²θ+cos²θ=1',
            '∫f(x)dx', 'lim x→∞', 'd/dx', '∂/∂x', 'f′(x)', 'f″(x)'
        ];

        // Set canvas dimensions to match window
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawNotebook();
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function drawNotebook() {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Background color - slight off-white for notebook paper
            ctx.fillStyle = 'rgba(252, 252, 250, 0.03)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw grid lines
            const gridSize = 25;
            ctx.strokeStyle = 'rgba(100, 100, 255, 0.1)';
            ctx.lineWidth = 0.5;

            // Horizontal lines
            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Vertical lines
            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            // Draw math symbols randomly
            ctx.font = '14px monospace';
            ctx.fillStyle = 'rgba(100, 100, 255, 0.1)';

            for (let i = 0; i < 100; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const symbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
                ctx.fillText(symbol, x, y);
            }
        }

        // Animation
        let particles: { x: number; y: number; speed: number; angle: number; symbol: string }[] = [];

        // Create floating math particles
        for (let i = 0; i < 30; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: 0.2 + Math.random() * 0.4,
                angle: Math.random() * Math.PI * 2,
                symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)]
            });
        }

        function animate() {
            if (!ctx || !canvas) return;

            drawNotebook();

            // Draw and update particles
            ctx.font = '16px monospace';
            ctx.fillStyle = 'rgba(100, 100, 255, 0.2)';

            particles.forEach(particle => {
                // Draw particle
                ctx.fillText(particle.symbol, particle.x, particle.y);

                // Move particle
                particle.x += Math.cos(particle.angle) * particle.speed;
                particle.y += Math.sin(particle.angle) * particle.speed;

                // Slightly change direction
                particle.angle += (Math.random() - 0.5) * 0.05;

                // Keep particles on screen
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;
            });

            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
            aria-hidden="true"
        />
    );
};

export default NotebookBackground;
