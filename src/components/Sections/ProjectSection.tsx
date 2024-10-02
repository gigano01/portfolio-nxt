import styles from "@/styles/modules/projects.module.css";
import Project from "@/components/Project";
import SlantedText from "../SlantedText";
import { saveAs } from "file-saver";
import ButtonRow from "../ButtonRow";
import Button from "../Button";

export default function ProjectSection() {
    function downloadFile(source: string, name: string) {
        saveAs(source, name);
    }

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
                    // otherContent={
                    //     <iframe
                    //         width="560"
                    //         height="315"
                    //         src="https://www.youtube.com/embed/yXaNyBzWDRc?si=1Jk4AbMJbk6BiZt9"
                    //         title="YouTube video player"
                    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    //         referrerPolicy="strict-origin-when-cross-origin"
                    //     ></iframe>
                    // }
                >
                    Piras avontuur is een location based game dat zich afspeelt in Antwerpen. Bij
                    dit project was ik de lead programmer en UX Designer in een groep van 4G
                    studenten. Het is een spel gemaakt als opdracht van de Hogeschool voor het MOS
                    met een geupdate versie van hun mascote Pira de muis.
                    <br />
                    <br />
                    Ik heb hierbij geleerd hoe elke onderdeel van een project als team aan te
                    pakken, maar ook hoe een onderdeel van zo&lsquo;n project te leiden. Hierbij heb ik
                    veel bijgeleerd over javascript en wat wel en niet te doen.
					<br />
					<br />
					Er zal altijd een plekje in mijn hart zijn voor Pira&lsquo;s Avontuur en het team er achter.
                    <ButtonRow className={styles.projectButtons}>
                        <Button
                            onClick={() =>
                                downloadFile(
                                    "https://www.dropbox.com/scl/fi/t7nrutxhwbb63rrzxcl5i/Desk_Research_Groep.pdf?rlkey=1w5k4e3q6ryol50uuozzt97d6&st=qz9d5fs9&dl=1",
                                    "Piras_Avontuur_Desk_Research.zip"
                                )
                            }
                            label="Download Desk Research"
                        />
                        <Button
                            onClick={() =>
                                downloadFile(
                                    "https://www.dropbox.com/scl/fi/w91gatxg7zaafs58aw7ql/Field_Research_Groep.pdf?rlkey=l4ak2y9sx9fs1269eanha6g2l&st=f03dinpf&dl=1",
                                    "Piras_Avontuur_Field_Research.zip"
                                )
                            }
                            label="Download Field Research"
                        />
                        <Button
                            style={{ backgroundColor: "#ed4242" }}
                            onClick={() =>
                                window.open(
                                    "https://youtu.be/yXaNyBzWDRc?si=qcXf4y0VJst1SGG_",
                                    "_blank"
                                )
                            }
                            label="Bekijk De Trailer"
                        />
                    </ButtonRow>
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
