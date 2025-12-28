export default function Home() {
  return (
    <>
      <header>
        <h1>不可燃烧垃圾垃圾垃圾桶</h1>
        <p className="bio">
          nils<br />
        </p>
      </header>

      <main>
        <section>
          <h3>Connect</h3>
          <ul>
            <li>
              → <a href="https://twitter.com/nilshiro" target="_blank" rel="noopener noreferrer">Twitter (@nilshiro)</a>
            </li>
            <li>
              → <a href="mailto:nilqaq@hitorino.me">Email (nilqaq@hitorino.me)</a>
            </li>
            <li>
              → <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
        </section>

        <hr />

        <section>
          <h3>Waifu-s</h3>
          <ul>
            <li>
              <a href="https://ququq.moe/" target="_blank" rel="noopener noreferrer">药丸 (ququq.moe)</a>
              <small>老婆</small>
            </li>
            <li>
              <a href="https://dawn.moe/" target="_blank" rel="noopener noreferrer">蓝猫 (dawn.moe)</a>
              <small>老婆</small>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} hitorino.me</p>
      </footer>
    </>
  )
}