import './Main.css'
import hand from "../../assets/Hello.png"
import emoji from "../../assets/Emoji.png"
import work from "../../assets/Work.png"
import text from "../../assets/Text.svg"
import SkillRoutes from '../../assets/SkillRoutes.png'
import Lobo from '../../assets/Lobo.png'
import Union from '../../assets/Union.png'
import ByneDocs from '../../assets/ByneDocs.jpeg'
import Limnia from '../../assets/LimniaOld.jpg'
import {Footer, Navbar, Project} from "../../components";
import {useEffect} from "react";
import useMobile from "../../hooks/useMobile.ts";

const Main = () => {
    useEffect(() => {
        const reveal = () => {
            const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
            const revealsLeft = Array.from(document.querySelectorAll<HTMLElement>(".reveal__left"));

            const allReveals = [...reveals, ...revealsLeft];

            allReveals.forEach((revealElement) => {
                const windowHeight = window.innerHeight;
                const elementTop = revealElement.getBoundingClientRect().top;
                const elementVisible = 100;

                if (elementTop < windowHeight - elementVisible) {
                    revealElement.classList.add("active");
                } else {
                    revealElement.classList.remove("active");
                }
            });
        };

        window.addEventListener("scroll", reveal);

        return () => window.removeEventListener("scroll", reveal);
    }, []);
    return <>
        <Navbar/>
        <section id="home" className="hero">
            <div className="container">
                <div className="content">
                    <div className="hero-main">
                        <div className="hero-text">
                            <h1>Front-End React <img
                                src={hand} alt="waving_hand"/> Developer</h1>
                            <p>Hi, I'm Roman Bozhovskiy, a dedicated Front-end React Developer from Lviv, Ukraine. 📍</p>
                            <span>
                                <a aria-label="linkedin" rel="noreferrer" target="_blank"
                                   href="https://www.linkedin.com/in/roman-bozhovskiy-946773282/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="tabler-icon tabler-icon-brand-linkedin">
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path
                                        d="M8 11l0 5"></path><path d="M8 8l0 .01"></path>
                                    <path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg></a><a
                                aria-label="github" rel="noreferrer" target="_blank"
                                href="https://github.com/Bozhovskiy"><svg xmlns="http://www.w3.org/2000/svg" width="32"
                                                                          height="32" viewBox="0 0 24 24" fill="none"
                                                                          stroke="currentColor" strokeWidth="2"
                                                                          strokeLinecap="round" strokeLinejoin="round"
                                                                          className="tabler-icon tabler-icon-brand-github">
                                    <path
                                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <div className="hero-img"></div>
                    </div>
                    <div className="skills"><p>Tech Stack</p>
                        <div className="logos">
                            <ul>
                                <li><img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon"/></li>
                                <li><img src="https://skillicons.dev/icons?i=js,ts" alt="skill-icon"/></li>
                                <li><img src="https://skillicons.dev/icons?i=react,next" alt="skill-icon"/></li>
                                <li><img src="https://skillicons.dev/icons?i=tailwind,scss" alt="skill-icon"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="about" id="about">
            <div className="container reveal">
                <div className="about-content">
                    <div className="img-side"><img src={emoji}
                                                   alt="emoji" className="work-emoji"/><img
                        src={work} alt="mee"
                        className="img-side__main-img"/><span><img
                        src={text} alt="text"/></span></div>
                    <div className="text-side"><h3>About me</h3><h4>Front-end Developer <br/> based in Lviv, Ukraine
                        📍</h4><p>Hey, I'm Roman, a passionate Frontend Developer focused on delivering clean and
                        intuitive user experiences.<br/>
                        I thrive on crafting visually appealing and highly functional interfaces that provide seamless
                        interaction for users.
                        My expertise lies in building modern web applications using React and Next.js, paired with
                        Tailwind CSS for responsive design and TypeScript for robust, scalable code.
                        With a keen eye for detail, I always aim to blend aesthetics with usability, ensuring the best
                        possible experience for users.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="projects" className="project">
            <div className="container reveal" style={{maxWidth:'100vw'}}>
                <h2 className="new-projects">Projects that could capture your interest:</h2>
                <div className="container" style={{padding: 0, gap: 40, display: "flex", flexDirection: "column"}}>
                    <Project
                        header="Lobo"
                        text="It's this cool new app that's changing the game for foodies on a budget. Basically, it connects us with local eateries offering delicious food at prices that won't break the bank. It's all about enjoying great meals, discovering new spots, and saving cash. Definitely a win-win for our appetites and wallets!"
                        imgSrc={Lobo}
                        url="/lobo"
                    />
                    <Project
                        header="25 UNION"
                        text="Elevate your wardrobe with 25union, the Ukrainian brand designed for the modern woman. Discover a curated collection of dresses, suits, trousers, tops, and sweaters, all crafted with style and quality in mind.  Shop with confidence knowing you'll find the perfect pieces to express your unique sense of style. Plus, enjoy convenient delivery throughout Ukraine and worldwide!"
                        imgSrc={Union}
                        url="https://25union.com.ua/"
                    />
                    <Project
                        header="Limnia"
                        text="Effortlessly build and deploy powerful LLM applications with a comprehensive suite of tools for creating custom solutions. With Retrieval-Augmented Generation (RAG), you can generate high-quality content based on your existing documents. Platform also enables your LLM to interact with external tools and data sources, allowing for seamless integration."
                        imgSrc={Limnia}
                        url="https://limnia.com/"
                    />
                    <Project
                        header="Byne Docs"
                        text="Effortlessly build and deploy powerful LLM applications with a comprehensive suite of tools for creating custom solutions. With Retrieval-Augmented Generation (RAG), you can generate high-quality content based on your existing documents. Platform also enables your LLM to interact with external tools and data sources, allowing for seamless integration."
                        imgSrc={ByneDocs}
                        url="https://www.bynedocs.com/"
                    />
                    <Project
                        header="Skill Routes"
                        text="Uncover the secrets to achieving your professional aspirations with our comprehensive roadmap discovery and creation platform. Explore a collection of customized roadmaps tailored to your specific goals that will provide you with the guidance and direction you need to successfully advance your career."
                        imgSrc={SkillRoutes}
                        url="/skillroutes"
                    />
                </div>
            </div>
        </section>
        <section id="contact" className="contact">
            <div className="container reveal">
                <div className="contact__content">
                    <div className="contact__title"><p>contact</p><h3>Don't be shy! Hit me up! 👇</h3></div>
                    <div className="contact__icons">
                        <div className="contact__icon-box"><span><svg xmlns="http://www.w3.org/2000/svg" width="30"
                                                                      height="30" viewBox="0 0 24 24" fill="none"
                                                                      stroke="currentColor" strokeWidth="2"
                                                                      strokeLinecap="round" strokeLinejoin="round"
                                                                      className="tabler-icon tabler-icon-map-search"><path
                            d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path
                            d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path
                            d="M20.2 20.2l1.8 1.8"></path></svg></span>
                            <div className="contact__info"><h3>Location</h3><p>Lviv, Ukraine</p></div>
                        </div>
                        <div className="contact__icon-box"><span><svg xmlns="http://www.w3.org/2000/svg" width="30"
                                                                      height="30" viewBox="0 0 24 24" fill="none"
                                                                      stroke="currentColor" strokeWidth="2"
                                                                      strokeLinecap="round" strokeLinejoin="round"
                                                                      className="tabler-icon tabler-icon-mail"><path
                            d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path
                            d="M3 7l9 6l9 -6"></path></svg></span>
                            <div className="contact__info"><h3>Mail</h3><a
                                href="mailto:bozhovskiy18@gmail.com">bozhovskiy18@gmail.com</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
}
export default Main