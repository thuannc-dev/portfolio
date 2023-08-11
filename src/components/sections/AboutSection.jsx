import Container from "../Container";

const AboutSection = () => {
  return (
    <Container>
      <div className="min-h-screen h-screen w-100 flex flex-col-reverse md:flex-row justify-around md:justify-center items-center">
        <img
          className="transition my-8 mx-auto"
          alt="cat"
          width="300px"
          src="./images/cat-on-document.png"
        />
        <div className="w-100 md:w-2/4 sm:pb-24 text-gray-700">
          <div className="flex items-center">
            <h1 className="text-5xl font-semibold mb-3">About me &nbsp; </h1>
            <div className="text-3xl animate-bounce">🏀</div>
          </div>
          <p className="mb-3">
            I enjoy creating beautiful and reliable applications for internet
            and phones.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="leading-9">
            <li>• ReactJS, Next.js</li>
            <li>• JavaScript, TypeScript</li>
            <li>• Tailwind, MUI, Ant Design, Styled Components</li>
            <li>• RestAPI, GraphQL</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
