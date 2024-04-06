import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import Card from "./Card";

import Trainer from '../A_media/whyChooseUs_icons/teacher.png';
import Success from '../A_media/whyChooseUs_icons/success.png';
import Resource from '../A_media/whyChooseUs_icons/resource.png';
import Support from '../A_media/whyChooseUs_icons/support.png';
import Practice from '../A_media/whyChooseUs_icons/practice.png';
import Discussion from '../A_media/whyChooseUs_icons/discussion.png';
import Fees from '../A_media/whyChooseUs_icons/fees.png';
import Test from '../A_media/whyChooseUs_icons/test.png';

const WhyUs = () => {
  return (
    <Container id="service">
      <Slide direction="left">
        <span className="wha">Why Us</span>
        <h1 className="wha-des">Reason For Choosing</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={<img src={Trainer} alt="Trainer" />}
            title={"Experienced Trainer"}
            disc={`We have Pearson certified faculty members...`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={<img src={Success} alt="Success" />}
            title={"Highest Success Rate"}
            disc={`Students will get a sure-shot success with the high...`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={<img src={Resource} alt="Resource" />}
            title={"Latest Resources"}
            disc={`Making use of the latest technology, we provide...`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={<img src={Support} alt="Support" />}
            title={"Online Support"}
            disc={`Our experts are always there to help the students through...`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={<img src={Practice} alt="Practice" />}
            title={"Questions to Practice"}
            disc={`We give the students various exercises and practice...`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={<img src={Discussion} alt="Discussion" />}
            title={"Discussion Sessions"}
            disc={`During the discussion sessions, Our experienced team...`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={<img src={Fees} alt="Fees" />}
            title={"Affordable Fees"}
            disc={`We offer the best PTE and NAATI coaching classes...`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={<img src={Test} alt="Test" />}
            title={"Real Time Tests"}
            disc={`We provide several mock tests for reading, listening...`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default WhyUs;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  .wha{
    font-weight: 600;
    color: rgba(51, 51, 51, 0.95);
    font-size: clamp(1rem, 4vw, 1.3rem);
    text-transform: capitalize;
  }

  .wha-des{
    font-size: clamp(1rem, 4vw, 2rem);
    text-transform: capitalize;
    margin-top: 8px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
  place-content: center;
  align-items: center;
`;
