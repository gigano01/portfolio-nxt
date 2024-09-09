import styles from "@/styles/modules/projects.module.css";
import Project from "@/components/Project";
import SlantedText from "../SlantedText";

export default function ProjectSection() {
    return (
        <section className={styles.projects}>
            <SlantedText
                className={[styles.projectsTitle, "josefin"].join(" ")}
                yOffset={-70}
                xOffset={-800}
                angle={-6}
            >
                Mijn Projecten! Mijn Projecten! Mijn Projecten! Mijn Projecten! Mijn Projecten! Mijn
                Projecten!
            </SlantedText>

            <div className={styles.projectsContainer}>
                <Project
                    id={styles.projectPirasAvontuur}
                    title="Pira's Avontuur"
                    imgLink="portfolio/project_pira.png"
                    imgAlt="pira's avontuur poster"
					faceRight={true}
					isFirst={true}
					otherContent={<iframe width="560" height="315" src="https://www.youtube.com/embed/yXaNyBzWDRc?si=1Jk4AbMJbk6BiZt9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>}
                >
                    Piras avontuur is een location based game dat zich afspeelt in Antwerpen.
                    Bij dit project was ik de lead programmer en UX Designer in een groep van 4G
                    studenten. Het is een spel gemaakt als opdracht van de Hogeschool voor het MOS
                    met een geupdate versie van hun mascote Pira de muis.
                    <br />
                    <br />
                    Ik heb hierbij geleerd hoe elke onderdeel van een project als team aan te
                    pakken, maar ook hoe een onderdeel van zon project te leiden.
                </Project>

                <Project
                    id={styles.projectForwardRedesign}
                    title="Forward Coaching Redesign Voorstel"
                    imgLink="portfolio/project_forward.png"
                    imgAlt="Forward nieuwe hoofdpagina"
					faceRight={false}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod nisl
                    arcu, eget efficitur nibh iaculis vitae. Vivamus ut sapien sed libero iaculis
                    imperdiet a et mi. Sed efficitur elit ut mattis aliquam. Duis erat dui,
                    malesuada nec neque sed, vestibulum finibus lacus. In lacinia arcu eu tristique
                    fermentum. Curabitur vulputate elit at tellus pharetra, sed volutpat lacus
                    tristique. Curabitur lacinia suscipit leo, sed convallis turpis tincidunt ac.
                    Mauris tristique ut risus vulputate blandit. Aenean sed luctus nisi. Nullam
                    ullamcorper tincidunt velit a tempus. Morbi in facilisis enim. Praesent
                    pharetra, nunc quis pellentesque pretium, justo eros facilisis odio, et
                    ullamcorper lacus elit eu ligula. Donec convallis lectus a nisi gravida, nec
                    accumsan ante sagittis. Mauris at ultrices magna. Ut elementum justo eu magna
                    ullamcorper, ut fermentum nulla scelerisque. Praesent non tempor elit, sit amet
                    tincidunt lectus.
                </Project>

                <Project
                    id={styles.projectTerrorRoom}
                    title="The Terror Room"
                    imgLink="portfolio/project_forward.png"
                    imgAlt="TEMPORARY"
					faceRight={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod nisl
                    arcu, eget efficitur nibh iaculis vitae. Vivamus ut sapien sed libero iaculis
                    imperdiet a et mi. Sed efficitur elit ut mattis aliquam. Duis erat dui,
                    malesuada nec neque sed, vestibulum finibus lacus. In lacinia arcu eu tristique
                    fermentum. Curabitur vulputate elit at tellus pharetra, sed volutpat lacus
                    tristique. Curabitur lacinia suscipit leo, sed convallis turpis tincidunt ac.
                    Mauris tristique ut risus vulputate blandit. Aenean sed luctus nisi. Nullam
                    ullamcorper tincidunt velit a tempus. Morbi in facilisis enim. Praesent
                    pharetra, nunc quis pellentesque pretium, justo eros facilisis odio, et
                    ullamcorper lacus elit eu ligula. Donec convallis lectus a nisi gravida, nec
                    accumsan ante sagittis. Mauris at ultrices magna. Ut elementum justo eu magna
                    ullamcorper, ut fermentum nulla scelerisque. Praesent non tempor elit, sit amet
                    tincidunt lectus.
                </Project>

                <Project
                    id={styles.projectClickyProject}
                    title="Clicky Project"
                    imgLink="portfolio/project_forward.png"
                    imgAlt=""
					faceRight={false}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod nisl
                    arcu, eget efficitur nibh iaculis vitae. Vivamus ut sapien sed libero iaculis
                    imperdiet a et mi. Sed efficitur elit ut mattis aliquam. Duis erat dui,
                    malesuada nec neque sed, vestibulum finibus lacus. In lacinia arcu eu tristique
                    fermentum. Curabitur vulputate elit at tellus pharetra, sed volutpat lacus
                    tristique. Curabitur lacinia suscipit leo, sed convallis turpis tincidunt ac.
                    Mauris tristique ut risus vulputate blandit. Aenean sed luctus nisi. Nullam
                    ullamcorper tincidunt velit a tempus. Morbi in facilisis enim. Praesent
                    pharetra, nunc quis pellentesque pretium, justo eros facilisis odio, et
                    ullamcorper lacus elit eu ligula. Donec convallis lectus a nisi gravida, nec
                    accumsan ante sagittis. Mauris at ultrices magna. Ut elementum justo eu magna
                    ullamcorper, ut fermentum nulla scelerisque. Praesent non tempor elit, sit amet
                    tincidunt lectus.
                </Project>
            </div>
        </section>
    );
}
