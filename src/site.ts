// Tag colors are a closed set rather than free-form strings: NativeWind resolves
// class names at build time, so Tag.tsx maps each value to a literal class pair.
// That map is the source of truth — adding a color means adding a case there.
import type { TagColor } from "@/components/Tag";

export type { TagColor };

export const site = {
  name: "Andre Volel",
  title: "Andre Volel",
  description:
    "Full-stack dev (18+ yrs) building AI-powered systems — memory-aware assistants, multi-agent workflows & intelligent pipelines. I architect, not just experiment.",
  github: "https://github.com/avolel",
};

export type Project = {
  name: string;
  description: string;
  link: string;
  tags: { label: string; color: TagColor }[];
};

export const projects: Project[] = [
  {
    name: "This Site",
    description:
      "My personal site. An Expo Router app that ships as a static web build, written with React Native primitives so the same components could run on native later. Web is the only target today.",
    link: "https://github.com/avolel/personal-site",
    tags: [
      { label: "React Native", color: "sky" },
      { label: "Expo Router", color: "fuchsia" },
    ],
  },
  {
    name: "Aurum",
    description: "Gold price intelligence platform.",
    link: "https://github.com/avolel/aurum",
    tags: [
      { label: "C#", color: "sky" },
      { label: "React Native", color: "fuchsia" },
      { label: "Expo Router", color: "sky" },
    ],
  },
  {
    name: "LLM Wiki",
    description:
      "A wiki whose content is stored in Oracle, embedded for semantic search, and authored/served with the help of LLM agents.",
    link: "https://github.com/avolel/LLM-WIKI",
    tags: [
      { label: "C#", color: "sky" },
      { label: "React Native", color: "fuchsia" },
      { label: "Expo Router", color: "sky" },
    ],
  },
  {
    name: "Personal AI Assistant",
    description:
      "A fully local, always-on AI assistant that runs entirely on your machine. Built with Python, it maintains a persistent identity, evolving memory, emotional simulation, and time awareness — designed to feel like a consistent digital personality rather than a stateless chatbot.",
    link: "https://github.com/avolel/assistant",
    tags: [
      { label: "Python", color: "sky" },
      { label: "React", color: "fuchsia" },
    ],
  },
  {
    name: "CCRun",
    description:
      "A lightweight Linux container runtime written in C# / .NET 10 — a 'Build Your Own Docker' learning project.",
    link: "https://github.com/avolel/ccrun",
    tags: [
      { label: "C#", color: "sky" },
      { label: ".Net 10", color: "fuchsia" },
    ],
  },
  {
    name: "EReader",
    description:
      "A personal ebook-library application. Users register an account, upload their own .epub files, and read them in the browser (or on a mobile device) chapter by chapter, with full text search across their library, persisted reading position, and per book typography or theme overrides.",
    link: "https://github.com/avolel/ereader",
    tags: [
      { label: "C#", color: "sky" },
      { label: "React Native", color: "fuchsia" },
      { label: "Expo Router", color: "sky" },
    ],
  },
  {
    name: "mp3Convert",
    description:
      "Converts all .mp4 files in a directory to .mp3 format using ffmpeg. Output is saved to a timestamped folder (Music_<YYYYMMDD_HHMMSS>) inside your Downloads folder.",
    link: "https://github.com/avolel/mp3Convert",
    tags: [{ label: "Python", color: "sky" }],
  },
  {
    name: "yt-downloader-andy",
    description:
      "A simple, production ready YouTube downloader CLI tool built with pytubefix.",
    link: "https://github.com/avolel/youtube_downloader",
    tags: [{ label: "Python", color: "sky" }],
  },
  {
    name: "Lucky Bug Casino (Digital Casino)",
    description:
      "A fully-featured terminal casino game written in Python, powered by a local LLM (via Ollama) for live commentary, and SQLite for persistent save/load support. Five classic casino games, a bankroll system, and a sneaky bug that randomly drains your wallet  win or lose.",
    link: "https://github.com/avolel/digital-casino",
    tags: [{ label: "Python", color: "sky" }],
  },
];
