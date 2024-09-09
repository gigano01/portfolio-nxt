import styles from "@/styles/modules/skills.module.css";
import Skill from "@/components/Skill";

export default function SkillSection() {
    return (
        <section className={styles.skills}>
            <Skill isLeft={false} imageLink="/skills/icon1.png" imageAlt="Visual Studio Code logo">
                Ik hou mij al sinds het middelbaar bezig met coderen, en ik ben altijd klaar om het
                naar een nieuw niveau te brengen.
            </Skill>

            <Skill isLeft={true} imageLink="/skills/icon2.png" imageAlt="Creative Cloud logo">
                In het middelbaar volgde ik Grafische Media en MultiMedia dus ik weet mijn weg wel
                te vinden in de Adobe programma’s
            </Skill>

            <Skill isLeft={false} imageLink="/skills/icon3.webp" imageAlt="Figma logo">
                Ik gebruik Figma om mijn Interfaces en Websites te ontwerpen en om mijn onderzoek
                makkelijk bij te houden.
            </Skill>

            <Skill isLeft={true} imageLink="/skills/icon4.png" imageAlt="Google Spreadsheets logo">
			Ik maak als sinds ik 15 ben Constructed Languages of conlangs in het kort. Dus
                    ik weet redelijk veel van taalkunde en ook hoe google spreadsheets te laten doen
                    wat ik wil.
            </Skill>

        </section>
    );
}
