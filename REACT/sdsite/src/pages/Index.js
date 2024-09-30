import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Index() {
  return (
    <Fragment>
      <Menu />
      <main className="main">
        <section id="home">
          <h2>Student Code Online Review and Evaluation</h2>
          <p>
            SCORE is a web application and submission server designed to
            increase productivity and enhance the learning experience of
            students learning to program.
          </p>
          <div>
            <b>Key Features for Students:</b>
            <p>
              Live Time Feedback: Students receive realtime feedback on their
              homework assignment.
            </p>
            <p>
              Single Site Submission: No need to access multiple locations for
              testing, homework submission, and grading. Everything is in one
              place!
            </p>
          </div>

          <div>
            <b>Key Features for Professors:</b>
            <p>
              Set and Forget Mindset: At the beginning of the year you can setup
              all of your assignments, and forget about grading and due dates.
            </p>
            <p>
              Anti-Cheat Notifications: If our academic dishonesty detection,
              detects any plagarism we will notify you to investigate with our
              findings, no more scouring the internet for potential solutions to
              your homework problems.
            </p>
            <p>
              Easy To Setup Assignment: Don't deal with the hassle of contacting
              staff to create assingments, just upload our assingment form or
              use our web interface to easily create your own assignments.
            </p>
          </div>

          <div>
            <b>Why You Want To Use SCORE!</b>
            <p>
              SCORE is a place where students can submit their programming
              assignments for grading, and receive real-time feedback and
              potenetial grades for their submission; the student can then take
              this feedback and modify their assignment and resubmit it any time
              before the submission deadline to increase their score. This
              encourages a critical thinking and learning enviroment, whilst
              decreasing academic stress. Once the deadline arrives, this
              feedback system will then automatically grade each assignment and
              submit the grades to the academies grading portal. Allowing
              professors to set and forget about assignments and focus on what
              really matters; their students.
            </p>
          </div>

          <p>
            If you have any questions or feedback, feel free to{" "}
            <a
              className="mainpage_link"
              target="_blank"
              href="mailto:tgingerelli2021@my.fit.edu,mkomar2021@my.fit.edu,ccollins2021@my.fit.edu,lklaproth2021@my.fit.edu"
            >
              Contact Us
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}

export default Index;
