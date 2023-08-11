import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full max-w-[2520px] mx-auto px-8 md:px-24 lg:px-32">
      <nav class="flex items-center py-6 lg:py-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <Logo />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
