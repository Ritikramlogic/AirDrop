import React, { useState } from "react";
export default function FaceBook() {
  const [FbLike, setFbLike] = useState(false);
  const [FbPost, setFbPost] = useState(false);

  const FaceBookLike = () => {
    setFbPost(!FbPost);
    console.log(FbPost);
  };
  return (
    <>
      {/* Like Button of FaceBook */}
      <p
        style={{
          fontSize: "1.225rem",
          color: " rgba(107, 114, 128)",
          fontWeight: "500",
        }}
      >
        Task 1: Like this FaceBook page
      </p>
      <div
        style={{
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
      >
        <div
          style={{ width: "100%", height: "100%" }}
          class="fb-like"
          data-href="https://www.facebook.com/Ramlogics-104762608689592"
          data-width=""
          data-layout="standard"
          data-action="like"
          data-size="small"
          data-share="false"
        ></div>
      </div>

      {/* //Share Button of FaceBook */}
      <p
        style={{
          fontSize: "1.225rem",
          color: " rgba(107, 114, 128)",
          fontWeight: "500",
        }}
      >
        Task 2: Share post in FaceBook{" "}
      </p>
      <div
        class="fb-share-button"
        data-href="https://www.facebook.com/Ramlogics-104762608689592"
        data-layout="button_count"
        data-size="small"
      >
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fnarendramodi%2F&amp;src=sdkpreparse"
          class="fb-xfbml-parse-ignore"
        >
          Share
        </a>
      </div>
      <div></div>
    </>
  );
}
