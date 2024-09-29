import React, { useEffect, useRef } from "react";
import { getScrollTop } from "get-scroll";
import useWindowSize from "@/data/useWindowSize";

const SlantedText = ({
    className,
    children,
    yOffset,
    xOffset,
    angle,
    yCorrection = 19,
}: {
    className: string;
    children: React.ReactNode;
    yOffset: number;
    xOffset: number;
    angle: number;
    yCorrection?: number;
}) => {
    const ref = useRef<HTMLHeadingElement | null>(null);
    const w = useWindowSize().width;
	const h2Style = {
		willChange: "transform"
	}

    useEffect(() => {
        const updatePosition = () => {
            if (ref.current) {
                const currentScrollTop = getScrollTop();
                const xSpeed = angle > 0 ? 0.5 : -0.5;
                const ySpeed = 0.05;
                ref.current.style.transform = `translateX(${
                    -xOffset + currentScrollTop * xSpeed
                }px) translateY(${
                    yOffset + w / yCorrection + currentScrollTop * ySpeed
                }px) rotate(${angle}deg)`;
                // Why 19? Because it's the golden ratio, and it looks good.. literally have NO idea LOL

                requestAnimationFrame(updatePosition);
            }
        };

        updatePosition();
    }, [yOffset, xOffset, angle, yCorrection, w]); // Dependencies for re-running the effect

    return (
        <h2 className={className} ref={ref} style={h2Style}>
            {children}
        </h2>
    );
};

export default SlantedText;
