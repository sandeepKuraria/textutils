import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase is Clicked." + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Converted to Upper Case!");
  };

  const handleLowClick = () => {
    console.log("LowerCase is Clicked." + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("success", "Converted to Lower Case!");
  };

  const handleClearClick = () => {
    console.log("Clear text is Clicked." + text);
    let newText = "";
    setText(newText);
    props.showAlert("success", "Text is cleared!");
  };

  const handleReverseClick = () => {
    console.log("Reverse is Clicked." + text);
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("success", "Text is Reversed!");
  };

  const handleCopyClick = () => {
    console.log("CopyText is Clicked." + text);
    var newText = document.getElementById("MyBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("success", "Text is Copied!");
  };

  const handleExtraSpaces = () => {
    console.log("Remove ExtraSpace is Clicked." + text);
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Extra Space is Removed!");
  };

  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  //text = "new text"; //wrong way to change state.
  //setText("new text"); //correct way of changing state

  return (
    <>
      <div className="mb-3 my-3">
        <label
          htmlFor="MyBox"
          className="form-label"
          style={{
            color: props.mode === "light" ? "#040e18" : "white",
          }}
        >
          <h2>{props.heading}</h2>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#040e18",
            color: props.mode === "light" ? "#040e18" : "white",
          }}
          id="MyBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary my-1 mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>

        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handleClearClick}
        >
          Clear text
        </button>

        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handleReverseClick}
        >
          Reverse
        </button>

        <button className="btn btn-primary my-1 mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>

        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handleExtraSpaces}
        >
          Remove ExtraSpace
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#040e18" : "white",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the box above to preview it here."}
        </p>
      </div>
    </>
  );
}
