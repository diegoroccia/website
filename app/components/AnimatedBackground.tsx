'use client';

import { useEffect, useRef } from 'react';

interface Node {
	x: number;
	y: number;
	vx: number;
	vy: number;
}

export function AnimatedBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Set canvas size
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);

		// Create nodes
		const nodeCount = 50;
		const nodes: Node[] = [];
		const maxDistance = 150;

		for (let i = 0; i < nodeCount; i++) {
			nodes.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5,
			});
		}

		// Animation loop
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Update and draw nodes
			nodes.forEach((node) => {
				// Update position
				node.x += node.vx;
				node.y += node.vy;

				// Bounce off edges
				if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
				if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

				// Draw node
				ctx.fillStyle = 'rgba(62, 207, 142, 0.3)';
				ctx.beginPath();
				ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
				ctx.fill();
			});

			// Draw connections
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const dx = nodes[i].x - nodes[j].x;
					const dy = nodes[i].y - nodes[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < maxDistance) {
						const opacity = (1 - distance / maxDistance) * 0.6;
						ctx.strokeStyle = `rgba(62, 207, 142, ${opacity})`;
						ctx.lineWidth = 1;
						ctx.beginPath();
						ctx.moveTo(nodes[i].x, nodes[i].y);
						ctx.lineTo(nodes[j].x, nodes[j].y);
						ctx.stroke();
					}
				}
			}

			requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener('resize', resizeCanvas);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed inset-0 -z-10 pointer-events-none"
			style={{ opacity: 0.7 }}
		/>
	);
}
