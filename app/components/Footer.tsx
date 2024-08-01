export default function Footer({ content }: any) {
  return (
    <footer className=" bg-black text-white w-full text-second max-w-screen-xl px-10 py-6 mt-auto mx-auto overflow-hidden lg:px-8">
      <div className="flex flex-wrap justify-between sm:justify-center sm:text-center">
        <div className="">
          {content.copyrights.one} &copy; {new Date().getFullYear()},{" "}
          {content.copyrights.two}
        </div>
        <div className="sm:hidden">
          <li className="xs:block">
            <a href="/" className="hover:text-gold">
              {content.home}
            </a>
          </li>
          <li className="xs:block">
            <a href="/terms" className="hover:text-gold">
              {content.terms}
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:text-gold">
              {content.policy}
            </a>
          </li>
        </div>
      </div>
    </footer>
  );
}

// FIXING A FOOTER BELOW:
// <body className="flex flex-col min-h-screen"
// then <footer class="mt-auto">
