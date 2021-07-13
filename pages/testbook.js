import React from "react";
import Layout from "../components/layout";
import Feature from "../components/Feature";
function testbook() {
  return (
    <Layout>
      <div className="testbook--container">
        <h2 className="title">Everything You Need For Your Exam Preparation</h2>
        <p className="testbook--subtitle">
          Online Courses, Practice Question Bank, Mock Test Series, Study Notes,
          Strategy & Preparation Plans, Guidance & Mentoring and more..
        </p>
        <div className="testbook-feature-flex-container">
          <div className="flex-item">
            <Feature />
          </div>
          <div className="flex-item">
            <Feature />
          </div>
        </div>
        <div className="testbook-feature-flex-container">
          <div className="flex-item">
            <Feature />
          </div>
          <div className="flex-item">
            <Feature />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default testbook;
