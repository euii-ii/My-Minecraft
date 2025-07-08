import "./About.scss";
import Button from "../Button/Button";

const aboutMeData = {
  one: {
    name: "Andrew Woan",
    imageUrl: "/images/me.webp",
    externalLink: "https://www.youtube.com/@andrewwoan",
    content: [
      {
        header: "About Me",
        paragraphs: [
          "I am a second-year Bachelor of Computer Applications (BCA) student with a strong passion for technology and innovation. My core expertise lies in full stack development, where I focus on crafting clean, intuitive, and responsive user interfaces alongside robust backend systems. I am currently broadening my technical skill set while actively exploring the transformative fields of Artificial Intelligence (AI) and Machine Learning (ML)."

        ],
      },
      {
        header: "Fun Facts",
        paragraphs: [
          " - I am obsessed with cute things. In particular, I really love pandas because they are sooooo adorable and cute. I have a stuffed animal panda that I take with me to places I go as a companion 🐼❤️.",
          " - I love creating things, every single art is super fascinating to me, from music, ceramics, crochet, to painting etc. Not good at many, but still love all of them haha.",
          " - I love teaching. Teaching means others get to create more things and those things make more people happy and that makes me really happy.",
          " - I love wandering. I will often take random paths in the middle of cities or nature to see how far it takes me and where it takes me.",
        ],
      },
    ],
  },
};

const About = () => {
  const data = aboutMeData["one"];

  if (!data) {
    return <div>Data not found</div>;
  }

  return (
    <div className="data-container">
      <div className="image-wrapper">
        <img src={data.imageUrl} alt={data.name} className="data-image" />
      </div>

      <Button href={data.externalLink} type={"/"}>
        Meow Meow
      </Button>

      {data.content.map((section, index) => (
        <div key={index} className="data-section">
          <h2 className="about-section-header">{section.header}</h2>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={`${index}-${pIndex}`} className="section-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      ))}

      <div className="image-wrapper-two">
        <img
          src="/images/inprogress.webp"
          alt={"Crochet Mr. Cloud in progress"}
          className="data-image-two"
        />
      </div>
      <p className="section-paragraph">
        - - some crazy stuffs - -
      </p>

      <div className="image-wrapper-two">
        <img
          src="/images/crochet.webp"
          alt={"Crochet Mr. Cloud"}
          className="data-image-two"
        />
      </div>
      <p className="section-paragraph">- - i donnot know stuffs - -</p>

      <div className="image-wrapper-3">
        <img
          src="/images/partner.webp"
          alt={"Partner in Crime"}
          className="data-image"
        />
      </div>
      <p className="section-paragraph">- - A cute panda - -</p>
    </div>
  );
};

export default About;
