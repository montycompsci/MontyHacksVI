import "../assets/css/FAQ.scss";
import { Accordion } from "react-bootstrap";

function FAQ() {
  const questions = [
    {
      header: "What is a hackathon?",
      body: "A hackathon is an event where people come together to create practical solutions to real world problems using technology. It provides an excellent opportunity to shape your ideas into prototypes and observe their viability. You will also meet many people who share your passions!",
    },
    {
      header: "Who can attend?",
      body: "MontyHacks is open to any high schoolers and middle schoolers above the age of 13.",
    },
    {
      header: "What skill levels is MontyHacks intended for?",
      body: "In past years, we’ve had many complete beginners and experienced programmers alike participate. Our workshops will vary in difficulty and we’ll also be offering a prize specifically for beginner projects!",
    },
    {
      header: "What is the maximum team size I can work in?",
      body: "You may work in a team of up to four people.",
    },
    {
      header: "Is it alright if I don’t have a team?",
      body: "Yes! You can compete alone or also find other people interested in forming a team on the day of the hackathon.",
    },
    {
      header: "Is there any cost to attending MontyHacks?",
      body: "No, MontyHacks is completely free! All food, merch, and prizes will be provided to participants at zero cost (thanks to our generous sponsors).",
    },
  ];

  return (
    <div id="faq">
      <div style={{ height: "70px" }}></div>
      <h2 className="section-title">faq</h2>
      <div className="faq app-container">
        <Accordion defaultActiveKey="0">
          {questions.map(({ header, body }, index) => (
            <Accordion.Item eventKey={index.toString()}>
              <Accordion.Header>{header}</Accordion.Header>
              <Accordion.Body>{body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
