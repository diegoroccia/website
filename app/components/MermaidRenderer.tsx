"use client";

import { useEffect } from "react";
import mermaid from "mermaid";

export default function MermaidRenderer() {
  useEffect(() => {
    // Initialize mermaid with configuration
    const primaryHsl = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary")
      .trim();
    const primaryColor = `hsl(${primaryHsl})`;

    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      themeVariables: {
        primaryColor,
        primaryTextColor: "#fff",
        primaryBorderColor: primaryColor,
        lineColor: "#64748b",
        secondaryColor: "#1e293b",
        tertiaryColor: "#0f172a",
        background: "#0a0a0a",
        mainBkg: "#1e293b",
        textColor: "#e2e8f0",
        fontSize: "16px",
      },
    });

    // Find all code blocks with mermaid class and render them
    const renderMermaid = async () => {
      const mermaidBlocks = document.querySelectorAll("code.language-mermaid");

      mermaidBlocks.forEach((block, index) => {
        const code = block.textContent || "";
        const pre = block.parentElement;

        if (pre && pre.tagName === "PRE") {
          // Create a div to hold the mermaid diagram
          const mermaidDiv = document.createElement("div");
          mermaidDiv.className = "mermaid";
          mermaidDiv.textContent = code;
          mermaidDiv.id = `mermaid-${index}`;

          // Replace the pre block with the mermaid div
          pre.replaceWith(mermaidDiv);
        }
      });

      // Render all mermaid diagrams
      await mermaid.run({
        querySelector: ".mermaid",
      });
    };

    renderMermaid();
  }, []);

  return null;
}
