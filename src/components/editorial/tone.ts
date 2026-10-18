export type Tone = "paper" | "tint" | "teal" | "yellow" | "indigo" | "navy";

export const toneClass = (tone: Tone): string => `vt-tone vt-tone--${tone}`;
