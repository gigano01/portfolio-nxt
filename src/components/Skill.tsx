import { animate } from "@/common/animate";
import styles from "@/styles/modules/skills.module.css";
import { use, useEffect, useRef } from "react";
// import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css/animate.compat.css"

export default function Skill({
    children,
    isLeft,
    imageLink,
    imageAlt,
	observer
}: {
    children: React.ReactNode;
    isLeft: boolean;
    imageLink: string;
    imageAlt: string;
	observer: IntersectionObserver;
}) {
	const ref = useRef(null);
    const isReversed = isLeft ? styles.reverse : "";
    const animDirection = isLeft ? "fadeInLeft" : "fadeInRight";


	useEffect(() => {
		animate(observer, ref);
	}, []);

    return (
        // <ScrollAnimation animateIn={animDirection} duration={0.8} animateOnce={true}>
            <div className={[styles.skillsSkill, "josefin", isReversed, "hidden"].join(" ")} ref={ref}>
                <img src={imageLink} alt={imageAlt} />
                <p>{children}</p>
            </div>
        // </ScrollAnimation>
    );
}
