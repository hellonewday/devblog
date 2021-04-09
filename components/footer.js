import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Say goodbye for now.
          </h3>
          <div className=" lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <div>
              <h5 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                About me
              </h5>
              <p>Hello, my name is Nguyen Quoc Hung. I am currently 4th year student at Post and Telecommunications Institute of Technoly. I am currently 
                DevOps Intern and entitled Cloud Engineer in GCP Operation Team at CMC Telecom.
              </p>
            </div>
            <br />
            <div>
              <a
                href={`https://www.facebook.com/maximusss98/`}
                className="mx-3 font-bold hover:underline"
              >
                Facebook
              </a>
              <a
                href={`https://github.com/hellonewday`}
                className="mx-3 font-bold hover:underline"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
