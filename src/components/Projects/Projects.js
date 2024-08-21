import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import seg from "../../Assets/Projects/band_seg.jpg";
import langchain_logo from "../../Assets/Projects/langchain-logo.png";
import gym_app from "../../Assets/Projects/gym_app.jpg";
import resnet_png from "../../Assets/Projects/resnet_architecture.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={langchain_logo}
              isBlog={false}
              title="NLP RAG"
              description="Developed a RAG system using Langchain, Llama3, and FAISS to answer questions about Kendrick Lamar's life and career. The project covers everything from dataset creation to model usage. Demonstrates end-to-end NLP pipeline implementation with a focus on efficiency and practical application."
              ghLink="https://github.com/gp-1108/NLP_RAG"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym_app}
              isBlog={false}
              title="Automating Gym Booking"
              description="My climbing gym requires booking a slot in advance. I built a bot that automates the booking process. The bot uses webscrapers to interact with the gym's website and books a slot based on user preferences with scheduled cloud functions."
              ghLink="https://github.com/gp-1108/gym-bros"
              demoLink="https://my-gym-bot.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seg}
              isBlog={false}
              title="People Segmentation"
              description="Computer Vision project aiming to improve the accuracy for segmenting occluded people in images from the SotA Yolov8 model. The project uses a custom dataset and a modified Yolov8 model to achieve the goal."
              ghLink="https://github.com/gp-1108/CV_Sport_Project"
              demoLink="https://projects.gp-apps.org/player-segmentation"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resnet_png}
              isBlog={false}
              title="ResNet Fine-Tuning"
              description="Fine tuning a ResNet model to classify images of different types of food. The project uses a custom built dataset scraped from the internet and ResNet34 model to achieve the goal. Final accuracy of 80% on heavily distorted images."
              ghLink="https://github.com/gp-1108/ResNet_finetuning"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
