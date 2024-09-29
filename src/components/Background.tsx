import React, { useEffect, useRef } from "react";
import { getScrollTop } from "get-scroll";
import useWindowSize from "@/data/useWindowSize";
import styles from "@/styles/modules/header.module.css";

function Background({}) {
    const canvasRef = useRef(null);
    const canvasMaskRef = useRef(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    const size = useWindowSize();

    useEffect(() => {
        const canvas = canvasRef.current || document.createElement("canvas");
        const canvasMask = canvasMaskRef.current || document.createElement("canvas");
        let timer = 0;
        let endTimer = 0; // Example endTimer value
        let animationFrameId: number;

        const updateMousePosition = (event: MouseEvent) => {
            mousePosition.current = { x: event.clientX, y: event.clientY };
        };

		const updateTouchPosition = (event: TouchEvent) => {
			mousePosition.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
		}

        const updateTouch = (event: any) => {
            endTimer = timer + 0.7;
        };
		canvas.width = size.largeWidth;
        canvas.height = size.largeHeight + 800;
		

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("touchmove", updateTouchPosition, { passive: true });
        window.addEventListener("click", updateTouch);

        const draw = () => {
            if (!canvas || !canvasMask) {
                console.log("no bitches");
                return;
            }
            timer += 0.02;
            drawBackground(
                canvas,
                canvasMask,
                mousePosition.current.x,
                mousePosition.current.y,
                timer,
                endTimer,
                size
            );

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();
		// const ctx = canvas.getContext("2d");
		// if(ctx){
		// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
		// 	ctx.fillStyle = "#454545";
		// 	ctx.fillRect(timer/20, 0, canvas.width-900, canvas.height-900);
		// }

        return () => {
            window.cancelAnimationFrame(animationFrameId);

            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("touchmove", updateTouchPosition);
            window.removeEventListener("click", updateTouch);
        };
    }, [size]);

    const drawBackground = (
        canvas: any,
        canvasMask: any,
        mouseX: number,
        mouseY: number,
        timer: number,
        endTimer: number,
        size: any
    ) => {
        const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
        

        // console.log(ctx);

        const scrollOffset = -getScrollTop() / 20;

        function getNormalizedDirectionVector2D(x1: number, y1: number, x2: number, y2: number) {
            // Compute the direction vector components
            let dx = x2 - x1;
            let dy = y2 - y1;

            // Calculate the magnitude of the direction vector
            let magnitude = Math.sqrt(dx * dx + dy * dy);

            // Normalize the direction vector
            let nx = dx / magnitude;
            let ny = dy / magnitude;

            // Return the normalized direction vector as an object
            return { nx, ny };
        }

        function noise(x: number) {
            x = (x << 13) ^ x;
            return 1.0 - ((x * (x * x * 15731 + 789221) + 1376312589) & 0x7fffffff) / 1073741824.0;
        }

        function genCircle(
			ctx: any,
            centerX: number,
            centerY: number,
            maxRadius: number,
            anglemodifier = 0.03
        ) {
            for (let radius = 0; radius <= maxRadius; radius += 15) {
                // Loop over different radii
                for (let angle = 0; angle < Math.PI * 2; angle += anglemodifier) {
                    // Loop over angles from 0 to 2π
                    const x = centerX + radius * Math.cos(angle) * 1.2; // Calculate x coordinate
                    const y = centerY + radius * Math.sin(angle); // Calculate y coordinate
                    if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) continue; // Skip if the point is outside the canvas
                    ctx.strokeStyle = "#1ED492";
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    const offset =
                        (radius / maxRadius) * Math.PI * 2 + angle + Math.sin(timer / 2) * 2; // Use offset to adjust the angle

                    if (radius >= maxRadius - 800) {
                        // If the current radius is the maximum radius
                        // Use noise function to generate consistent offsets
                        const noiseOffsetX = noise((x + Math.sin(timer) * 30) * 0.04) * 8 - 6; // Noise value between -5 and 5
                        const noiseOffsetY = noise((y + Math.cos(timer) * 20) * 0.06) * 5 - 1; // Noise value between -5 and 5

                        const normalizedDirection = getNormalizedDirectionVector2D(
                            x,
                            y,
                            mouseX + offset + noiseOffsetX,
                            mouseY + offset + noiseOffsetY + scrollOffset
                        );
                        ctx.moveTo(
                            x + offset + noiseOffsetX,
                            y + offset + noiseOffsetY + scrollOffset
                        ); // Move to the calculated point on the circle
                        ctx.lineTo(
                            x + noiseOffsetX + normalizedDirection.nx * 12,
                            y + noiseOffsetY + normalizedDirection.ny * 14 + scrollOffset
                        );
                    } else {
                        // If the current radius is not the maximum radius
                        const normalizedDirection = getNormalizedDirectionVector2D(
                            x,
                            y,
                            mouseX + offset,
                            mouseY + offset + scrollOffset
                        );
                        ctx.moveTo(x + offset, y + offset + scrollOffset); // Move to the calculated point on the circle
                        ctx.lineTo(
                            x + normalizedDirection.nx * 12,
                            y + normalizedDirection.ny * 14 + scrollOffset
                        );
                    }

                    //ctx.lineTo((x) + normalizedDirection.nx * 12, (y) + normalizedDirection.ny * 14)
                    ctx.stroke();
                }
            }
        }

        genCircle(ctx, 0, 0, 1800);
        genCircle(ctx, canvas.width, canvas.height, 1800);

        //copy main canvas to blur canvas
        canvasMask.width = canvas.width;
        canvasMask.height = canvas.height;
        if (endTimer > timer) {
            const ctxMask = canvasMask.getContext("2d");
            ctxMask.drawImage(canvas, 0, 0);

            ctxMask.globalCompositeOperation = "destination-in";
            ctxMask.beginPath();
            ctxMask.arc(mouseX, mouseY, (endTimer - timer) * 350, 0, Math.PI * 2);
            // Set the shadow properties
            ctxMask.shadowBlur = 80; // Adjust the level of blur
            ctxMask.shadowColor = "black"; // Adjust the color of the blur
            ctxMask.shadowOffsetX = 0; // Adjust the horizontal offset of the blur
            ctxMask.shadowOffsetY = 0; // Adjust the vertical offset of the blur

            ctxMask.fill();
        }

        //  console.log(canvas)
    };

    return (
        <>
            <canvas ref={canvasRef} className={styles.headerBackground} />
            <canvas ref={canvasMaskRef} className={styles.headerBackgroundunBlur} />
        </>
    );
}

export default Background;
