import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function ProjectDetails() {
  return (
    <Fragment>
      <Menu />

      <main className="main">
        <section id="project_details">
          <h2>Project Details</h2>
          <h3>Project Milestones</h3>
          <table>
            <tr>
              <th>Milestone Number</th>
              <th>Milestone Content</th>
              <th>Due Date</th>
            </tr>
            <tr>
              <td>Project Plan</td>
              <td>
                <a
                  href={
                    process.env.PUBLIC_URL + "/assets/docs/Project Plan.pdf"
                  }
                  target="_blank"
                >
                  Project Plan
                </a>
                ,{" "}
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/assets/docs/Project Plan Presentation.pdf"
                  }
                  target="_blank"
                >
                  Project Plan Presentation
                </a>
              </td>
              <td>Sep. 4th</td>
            </tr>
            <tr>
              <td>Milestone 1</td>
              <td>
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/assets/docs/Software Design Document.pdf"
                  }
                  target="_blank"
                >
                  Software Design Document
                </a>
                ,{" "}
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/assets/docs/Software Testing Plan.pdf"
                  }
                >
                  Software Testing Plan
                </a>
                ,{" "}
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/assets/docs/Milestone Progress Evaluation.pdf"
                  }
                >
                  Milestone Progess Evaluation
                </a>
                ,{" "}
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/assets/docs/Software Requirements Specification.pdf"
                  }
                >
                  Software Requirements Specification
                </a>
              </td>
              <td>Sep. 30th</td>
            </tr>
            <tr>
              <td>Milestone 2</td>
              <td>TBD</td>
              <td>Oct. 28nd</td>
            </tr>
            <tr>
              <td>Milestone 3</td>
              <td>TBD</td>
              <td>Nov. 25nd</td>
            </tr>
          </table>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}

export default ProjectDetails;
