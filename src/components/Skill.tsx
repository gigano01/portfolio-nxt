import styles from "@/styles/modules/skills.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css"

export default function Skill({
    children,
    isLeft,
    imageLink,
    imageAlt,
}: {
    children: React.ReactNode;
    isLeft: boolean;
    imageLink: string;
    imageAlt: string;
}) {
    const isReversed = isLeft ? styles.reverse : "";
    const animDirection = isLeft ? "fadeInLeft" : "fadeInRight";

    return (
        <ScrollAnimation animateIn={animDirection} duration={0.8} animateOnce={true}>
            <div className={[styles.skillsSkill, "josefin", isReversed].join(" ")}>
                <img src={imageLink} alt={imageAlt} />
                <p>{children}</p>
            </div>
        </ScrollAnimation>
    );
}
