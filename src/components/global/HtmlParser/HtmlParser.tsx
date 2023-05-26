"use client";
import React from "react";
import { Parser } from "./HtmlParser.styled";

const HtmlParser: React.FC<{ content: string }> = ({ content }) => {
  return <Parser dangerouslySetInnerHTML={{ __html: content }}></Parser>;
};

export default HtmlParser;
