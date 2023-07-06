import React from "react";
import Tu from "../TU.jpg";
import { Link } from "react-router-dom";
export default function About(props) {
  // const [myStyle, SetMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });

  // const [btnText, setbtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     SetMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtnText("Enable Dark Mode");
  //   } else {
  //     SetMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setbtnText("Enable Light Mode");
  //   }
  // };

  //   let myStyle1 = {
  //     color: "white",
  //     backgroundColor: "black",
  //   };

  return (
    <div className="container my-3">
      <div>
        <h1
          className="my2"
          style={{
            color: props.mode === "light" ? "#040e18" : "white",
          }}
        >
          {props.heading}
        </h1>
        <div className="card" style={{ width: "70rem" }}>
          {/* <div
            className="container"
            style={{
              width: "18rem",
            }}
          >
          <img
            src={Tu}
            alt=""
            style={{
              width: "18rem",
            }}
          />
          </div> */}

          <div style={{ display: "flex" }}>
            <div>
              <img
                src={Tu}
                alt=""
                style={{
                  width: "18rem",
                }}
              />
            </div>
            <div
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#040e18",
                flex: 1,
              }}
            ></div>
          </div>

          <div
            className="card-body"
            style={{
              color: props.mode === "light" ? "#040e18" : "white",
              backgroundColor: props.mode === "light" ? "white" : "#040e18",
            }}
          >
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">
              Welcome to our text converting website! We provide a simple yet
              powerful tool to convert text into uppercase or lowercase,
              calculate words per minute, and even reverse the text.
            </p>
            <p className="card-text">
              Our mission is to make text manipulation effortless and efficient.
              Whether you need to change the case of your text to meet specific
              requirements or analyze your reading speed, our website has got
              you covered.
            </p>
            <p className="card-text">
              With our text converter, you can easily transform any text to
              uppercase or lowercase, enabling you to format your text exactly
              how you want it. Whether you need to convert titles, headings, or
              just want to experiment with different case styles, our tool is
              here to help.
            </p>
            <p className="card-text">
              Additionally, our website offers a words per minute (WPM)
              calculator. Simply paste your text, and our calculator will
              estimate your reading speed in words per minute. This feature can
              be particularly useful for readers, students, or anyone interested
              in monitoring their reading efficiency.
            </p>
            <p className="card-text">
              Last but not least, we also provide a text reversal function. If
              you ever need to reverse the order of your text, our tool can
              quickly and accurately reverse any input you provide. It's perfect
              for creating unique effects or exploring new ways to present your
              content.
            </p>
            <p className="card-text">
              We are committed to delivering a user-friendly experience with
              accurate and efficient text conversions. If you have any
              questions, suggestions, or feedback, please don't hesitate to
              reach out to us. We appreciate your support and are here to assist
              you in any way we can.
            </p>
            <Link to="/home" className="btn btn-primary">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
      {/* <button
        onClick={toggleStyle}
        type="button"
        className="btn btn-primary  my-3"
      >
        {btnText}
      </button> */}
    </div>
  );
}
