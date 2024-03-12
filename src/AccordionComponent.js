import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";
// import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import faqs from "./faqs.json"
import star from "./images/icon-star.svg"

export default function AccordionComponent() {

    return (

        <div className="content">
            <div className="header"><span className="icon-star"><img src={star}/></span>FAQs</div>
            <Accordion flush>
                {faqs.questions.map((element, index) => (
                    <Accordion.Item eventKey= {index} >
                        <Accordion.Header className="acc-header">{element.question}</Accordion.Header>
                        <Accordion.Body className="acc-body">{element.answer}</Accordion.Body>
                    </Accordion.Item>
                    
                ))}
            </Accordion>
        </div>
    )

}