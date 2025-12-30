import AboutHero from "@/components/about/about-hero"
import AboutIntro from "@/components/about/about-intro"
import AboutServices from "@/components/about/about-services"
import AboutMission from "@/components/about/about-mission"
import AboutTeam from "@/components/about/about-team"
import AboutWhyOks from "@/components/about/about-why-oks"

export const metadata = {
    title: "About OKS - Omnitech Kernel Solutions",
    description:
        "OKS is a technology solutions company focused on helping businesses operate smarter, scale faster, and make better decisions through well-designed digital systems.",
}

export default function AboutPage() {
    return (
        <>
            <main>
                <AboutTeam />
                <AboutHero />
                <AboutIntro />
                <AboutServices />
                <AboutMission />
                <AboutWhyOks />
            </main>
        </>
    )
}
