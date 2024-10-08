import { useEffect, useRef } from "react";
import styles from "@/styles/modules/projects.module.css";
import * as MathIsFun from "@/data/mathIsFun";
import React from "react";

export default function Project({
    id,
    title,
    children,
    imgLink,
    imgAlt,
    faceRight,
    isFirst = false,
    otherContent = null,
    ongoing = false,
}: {
    id: string;
    title: string;
    children: React.ReactNode;
    imgLink: string;
    imgAlt: string;
    faceRight: boolean;
    isFirst?: boolean;
    otherContent?: React.ReactNode;
    ongoing?: boolean;
}) {
    const ref = useRef(null);
    const animationFrameId = useRef(0);

    useEffect(() => {
        if (isFirst) {
            return;
        }
        function getViewHeight() {
            return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        }

        function getViewWidth() {
            return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        }

        function projectsDivSlant(ref: any, faceRight: boolean) {
            const topBound = ref.getBoundingClientRect().top - getViewHeight();

            if (topBound < 0 && !isFirst) {
                const slant = MathIsFun.clamp(
                    MathIsFun.lerp(
                        0,
                        70 + getViewWidth() / 15,
                        MathIsFun.normalize(-topBound, 0, getViewHeight())
                    ),
                    0,
                    110
                );
                const dirSwitch1 = faceRight ? "0" : "100%";
                const dirSwitch2 = faceRight ? "100%" : "0";

                ref.style.clipPath = `polygon(${dirSwitch2} 0, ${dirSwitch1} ${slant}px, ${dirSwitch1} 100%, ${dirSwitch2} 100%)`;
                ref.style.webkitClipPath = `polygon(${dirSwitch2} 0, ${dirSwitch1} ${slant}px, ${dirSwitch1} 100%, ${dirSwitch2} 100%)`;
            }

            animationFrameId.current = requestAnimationFrame(() =>
                projectsDivSlant(ref, faceRight)
            );
        }

        const element = ref.current;
        if (element) {
            projectsDivSlant(element, faceRight);
        }

        // Cleanup function to cancel the animation frame request when the component unmounts
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [faceRight, ref, animationFrameId, isFirst]);

    return (
        <>
            <div className={styles.projectsProject} id={id} ref={ref}>
                {otherContent ? (
                    <div className={styles.projectsImage}>{otherContent}</div> // Replace <div>{otherContent}</div> with the actual JSX for other content
                ) : (
                    <img src={imgLink} alt={imgAlt} className={styles.projectsImage} />
                )}

                <div className={[styles.projectsSynopsis, "josefin"].join(" ")}>{children}</div>
                <h3 className={[styles.projectsName, "josefin"].join(" ")}>
                    {title} {ongoing && <span className={styles.ongoingFlag}>Work In Progress</span>}
                </h3>
            </div>
        </>
    );
}
