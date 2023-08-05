import { BsFillTelephoneFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Container from "../Container";
import Button from "../Button";

const ContactSection = () => {
  return (
    <Container>
      <div className="min-h-screen h-screen w-100 flex flex-row items-center">
        <div>
          <h1 className="font-semibold font-serif text-5xl text-gray-700">
            Contact
          </h1>
          <p className="text-gray-500">Don't be shy! Hit me up!</p>
          <div className="flex gap-2 my-6">
            <Button>
              <a href="tel:(+84) 983305474">
                <BsFillTelephoneFill size={16} />
              </a>
            </Button>
            <Button>
              <a href="mailto:thuannc97@gmail.com">
                <HiMail size={20} />
              </a>
            </Button>
            <Button>
              <a href="https://www.linkedin.com/in/thuan-nguyen-cong-5b6990200/">
                <BsLinkedin size={20} />
              </a>
            </Button>
            <Button>
              <a href="https://github.com/thuannc-dev">
                <BsGithub size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
