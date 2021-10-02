const Header = () => (
  <header className="Header bg-gray-50 text-blue-500 p-4 w-full">
    <div className="mx-auto flex justify-between items-center w-5/6 max-w-6xl">
      <h1>Goroutine Sort Benchmark</h1>
      <a
        href="https://github.com/shah-a/few2.3-04-final-project/"
        target="_blank"
        rel="noreferrer"
        className="inline-block hover:text-blue-400 transition-colors motion-safe:hover:animate-wiggle"
      >
        <i className="fab fa-github-alt fa-3x" />
      </a>
    </div>
  </header>
);

export default Header;
