/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/modules/about.module.css";
import SlantedText from "../SlantedText";
// import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import React, { useEffect, useRef } from "react";
import { animate, unanimate } from "@/common/animate";
 

export default function AboutSection() {

	const sparkleOne = useRef(null);
	const sparkleTwo = useRef(null);
	
	useEffect(() => {
		const observer = animate(null, sparkleOne);
		animate(observer, sparkleTwo);

		return () => {
			// cleanup
			unanimate(observer, sparkleOne);
			unanimate(observer, sparkleTwo);
		};
    }, []);
	
    return (
        <>
            <section className={styles.about}>
                <SlantedText
                    className={[styles.aboutTitle, "josefin"].join(" ")}
                    yOffset={-70}
                    xOffset={800}
                    angle={6}
                >
                    Wie ben ik? Wie ben ik? Wie ben ik? Wie ben ik? Wie ben ik? Wie ben ik?
                </SlantedText>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutImageContainer}>
                        <img
                            src="me_me_me_pfp.jpg"
                            alt="Noah Van Leemput"
                            className={styles.aboutImage}
                        />
						<div className={[styles.aboutSparkle, styles.sparkleOne, "hidden"].join(" ")} id="sparkleOne" ref={sparkleOne}>
                            <img src="sparkle.png" alt="sparkle" />
						</div>
						<div className={[styles.aboutSparkle, styles.sparkleTwo, "hidden"].join(" ")} id="sparkleTwo" ref={sparkleTwo}>
                            <img src="sparkle.png" alt="sparkle" />
						</div>
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
