import type { ReactNode } from "react";

type Props = {
  title: string;
  situation: string;
  moves: string[];
  why: string;
  avoid?: string;
  children?: ReactNode;
};

/** Concrete mini-case for strategy articles — server-rendered for crawlers */
export function TacticCase({
  title,
  situation,
  moves,
  why,
  avoid,
  children,
}: Props) {
  return (
    <aside className="tactic-case">
      <h3 className="tactic-case__title">{title}</h3>
      <p>
        <strong>Situation:</strong> {situation}
      </p>
      <p>
        <strong>Example sequence:</strong>
      </p>
      <ol>
        {moves.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ol>
      <p>
        <strong>Why it works:</strong> {why}
      </p>
      {avoid && (
        <p className="tactic-case__avoid">
          <strong>Avoid:</strong> {avoid}
        </p>
      )}
      {children}
    </aside>
  );
}
