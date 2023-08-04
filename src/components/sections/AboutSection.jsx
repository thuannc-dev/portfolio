import Container from "../Container";

const AboutSection = () => {
  return (
    <Container>
      <div className="h-screen w-100 flex flex-col-reverse md:flex-row justify-center items-center">
        <img
          className="transition my-8 mx-auto"
          alt="cat"
          width="300px"
          src="./images/cat-on-document.png"
        />
        <div className="w-100 md:w-2/4 sm:pb-24">
          <div className="flex items-end pb-5">
            <h1 className="font-semibold text-5xl mb-6">About me</h1>
            <div className="animate-bounce text-3xl pb-6">
              {" "}
              <p>🏀</p>
            </div>
          </div>
          <p className="mb-3">
            I enjoy creating beautiful and reliable applications for internet
            and phones. My goal is to always build scalable products and
            performant experiences.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="leading-9">
            <li>• ReactJS, Next.js</li>
            <li>• JavaScript, TypeScript</li>
            <li>• Tailwind, MUI, Ant Dessign, Chakra UI</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
