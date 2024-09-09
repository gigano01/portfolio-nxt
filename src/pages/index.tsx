import Image from "next/image";
import HeaderSection from "@/components/Sections/HeaderSection";
import AboutSection from "@/components/Sections/AboutSection";
import SkillSection from "@/components/Sections/SkillSection";
import ProjectSection from "@/components/Sections/ProjectSection";


export default function Home() {
    return (
        <>
            <HeaderSection />

            <AboutSection />

           <SkillSection />

            <ProjectSection />
        </>
    );
}
