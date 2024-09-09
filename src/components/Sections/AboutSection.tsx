/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/modules/about.module.css";
import SlantedText from "../SlantedText";

export default function AboutSection() {
    return (
        <>
            <section className={styles.about}>
                <SlantedText className={[styles.aboutTitle, "josefin"].join(" ")} yOffset={-70} xOffset={800} angle={6}>
                    Wie ben ik? Wie ben ik? Wie ben ik? Wie ben ik? Wie ben ik? Wie ben ik?
                </SlantedText>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutImageContainer}>
                        <img
                            src="me_me_me_pfp.jpg"
                            alt="Noah Van Leemput"
                            className={styles.aboutImage}
                        />
                        <img
                            src="sparkle.png"
                            alt="sparkle"
                            className={styles.aboutSparkle}
                            id={styles.sparkleOne}
                            data-aos="zoom-in"
                            data-aos-offset="-100"
                            data-aos-easing="ease-out-back"
                            data-aos-delay="300"
                        />
                        <img
                            src="sparkle.png"
                            alt="sparkle"
                            className={styles.aboutSparkle}
                            id={styles.sparkleTwo}
                            data-aos="zoom-in"
                            data-aos-offset="20"
                            data-aos-easing="ease-out-back"
                            data-aos-delay="300"
                        />
                    </div>
                    <div className={[styles.aboutText, "josefin"].join(" ")}>
                        <ul>
                            <li>Pro Coder in the making</li>
                            <li>GDM student</li>
                            <li>Conlanger</li>
                            <li>Verzamelaar van rare weetjes</li>
                        </ul>
                        <p>
                            Ik ben Noah Van Leemput! Ik zit op Kot in Antwerpen vlak bij waar ik
                            naar school ga op AP. Ik kom uit Pijpelheide. Mijn hobbies zijn rare
                            dingen maken en coderen. Ik heb een fascinatie voor Webdesign en
                            interactieve installaties, en ben telkens blij om bij te leren.
                        </p>
                    </div>
                </div>
            </section>
            <div className={styles.fancyWavyThing}></div>
        </>
    );
}
