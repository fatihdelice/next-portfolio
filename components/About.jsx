import Link from "../util/noScrollLink";

const About = () => {
    return (
        <article className="w-main-content max-w-full mv-0 mx-auto grid px-4 text-fluid--1 dark:text-text-4">
            <p className="text-base mt-0 text-fluid--1">
                Hey, I am Fatih Delice, a Computer Engineer, Developer. I love everything that include visuality and aesthetic. I am developing interfaces with popular technologies for mobile and web applications. <br /><br />
                Proficient in HTML, CSS, JavaScript; plus modern libraries and frameworks (Angular.js, React.js, React-Native, Next.js, Tailwind, SASS...). Possess working knowledge of Adobe Photoshop, Figma, Illustrator, Premiere.
            </p>
            <p className="mt-6">
                <span>Find me on</span>{" "}
                <Link href="https://twitter.com/fatihdelice_">
                    <a target="_blank" className=" cursor-ne-resize">Twitter,</a>
                </Link>{" "}
                <Link href="https://github.com/fatihdelice">
                    <a target="_blank" className=" cursor-ne-resize">GitHub, </a>
                </Link>{" "}
                <Link href="https://www.linkedin.com/in/fatihdelice/">
                    <a target="_blank" className=" cursor-ne-resize">LinkedIn,</a>
                </Link>{" "}
                <Link href="https://www.youtube.com/fatihdelice?sub_confirmation=1">
                    <a target="_blank" className=" cursor-ne-resize">YouTube.</a>
                </Link>{" "}
                <span>Maybe</span>{" "}
                <Link href="https://instagram.com/next-portfolio">
                    <a target="_blank" className=" cursor-ne-resize">Instagram.</a>
                </Link><br />

                <span>You can read my articles on </span>{" "}
                <Link href="https://fatihdelice.medium.com/">
                    <a target="_blank" className=" cursor-ne-resize">Medium.</a>
                </Link><br />

                <span>Mail me at</span>{" "}
                <Link href="mailto:fatihdelice@outlook.com">
                    <a target="_blank" className=" cursor-ne-resize">fatihdelice@outlook.com.</a>
                </Link>
            </p>
            <p className="mt-6">
                <span>If you like my works, you can </span>{" "}
                <Link href="https://www.buymeacoffee.com/fatihdelice">
                    <a target="_blank" className=" cursor-ne-resize">Buy Me a Coffee.</a>
                </Link>
            </p>

            <style jsx>{`
            .text-fluid--1 {
              font-size: clamp(.83rem, calc(.78rem + .29vw), 1rem);
            }
            .text-text-4 {
              color: #868e96;
            }
        `}</style>
        </article>
    );
}


export default About;