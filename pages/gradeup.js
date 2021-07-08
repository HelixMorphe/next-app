import React from "react";
import Layout from "../components/layout";
import Image from "next/image";
function gradeup() {
  return (
    <Layout title="GradeUp">
      <section className="section-1">
        <h2 className="title">Why choose Gradeup?</h2>
        <div className="flexbox-container">
          <div className="flexbox-item">
            <Image
              src="https://grdp.co/cdn-cgi/image/quality=100,width=200,f=auto/https://gs-post-images.grdp.co/2021/2/group-17-characters-standing-woman-standing-2-mask-2x-img1613745249937-59.png-rs-high-webp.png"
              alt="It's an image"
              width="200px"
              height="200px"
            />
            <h3>Live Courses with Study Plan</h3>
            <p>Courses designed with a day-wise study schedule</p>
          </div>
          <div className="flexbox-item">
            <Image
              src="https://grdp.co/cdn-cgi/image/quality=100,width=200,f=auto/https://gs-post-images.grdp.co/2021/2/group-17-characters-standing-woman-standing-2-mask-2x-img1613745249937-59.png-rs-high-webp.png"
              alt="It's an image"
              width="200px"
              height="200px"
            />
            <h3>Expert Faculty</h3>
            <p>Experienced faculty who have mentored toppers</p>
          </div>
          <div className="flexbox-item">
            <Image
              src="https://grdp.co/cdn-cgi/image/quality=100,width=200,f=auto/https://gs-post-images.grdp.co/2021/2/group-17-characters-standing-woman-standing-2-mask-2x-img1613745249937-59.png-rs-high-webp.png"
              alt="It's an image"
              width="200px"
              height="200px"
            />
            <h3>Best Practice & Study Material</h3>
            <p>Unlimited quizzes, mock tests & PDF notes</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default gradeup;
