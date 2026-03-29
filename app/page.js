import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <nav className={styles.navbar}>asmitbm</nav>
      <main className={styles.content}>
        <div className={styles.inner}>
          <p className={styles.heading}>
            Thanks for stopping by! This site is still under development, feel
            free to check out the other links in the meantime :)
          </p>
          <ul className={styles.links}>
            <li>- <a href="https://bio.link/asmit" target="_blank" rel="noopener noreferrer">Bio.link</a></li>
            <li>- <a href="https://linkedin.com/in/asmitbm" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li>- <a href="https://x.com/asmitbm" target="_blank" rel="noopener noreferrer">Twitter (X)</a></li>
            <li>- <a href="https://github.com/asmitbm" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li>- <a href="https://figma.com/@asmitbm" target="_blank" rel="noopener noreferrer">Figma</a></li>
          </ul>
        </div>
      </main>
    </>
  );
}
