import React from "react";
import Markdown from "react-markdown";

const markdown = "# Hi, *Pluto*!";

export default function BlogPost() {
  return <Markdown>{markdown}</Markdown>;
}
