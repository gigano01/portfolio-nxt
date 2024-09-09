import styles from "@/styles/modules/skills.module.css";

export default function Skill({ children , isLeft, imageLink, imageAlt }: { children: React.ReactNode, isLeft: boolean, imageLink: string, imageAlt: string}) {
	const isReversed = isLeft ? styles.reverse : "";

    return (
        <div className={[styles.skillsSkill, "josefin", isReversed].join(" ")}>
            <img src={imageLink} alt={imageAlt} />
            <p>{children}</p>
        </div>
    );
}
