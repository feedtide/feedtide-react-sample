import { FeedTideProvider, FeedTideWidget } from "@feedtide/react";
import { useState } from "react";
import "./App.css";

type Mode = "standalone" | "provider";

function StandaloneDemo() {
  return (
    <>
      <div className="app">
        <h1>@feedtide/react sample</h1>
        <p className="subtitle">
          <strong>Standalone mode</strong> — no provider needed. Config is passed
          directly to the widget.
        </p>

        <div className="section">
          <h2>Standalone widget</h2>
          <p className="section-desc">
            Pass config props directly to{" "}
            <code className="code">&lt;FeedTideWidget&gt;</code> — no{" "}
            <code className="code">&lt;FeedTideProvider&gt;</code> required.
            Ideal for simple, single-widget setups.
          </p>
        </div>
      </div>

      <FeedTideWidget
        appId="app_mlvms260Wex3bcTu"
        theme="shiny-light"
        position="bottom-right"
      />
    </>
  );
}

function ProviderDemo() {
  return (
    <FeedTideProvider appId="app_mlvms260Wex3bcTu" theme="shiny-light">
      <div className="app">
        <h1>@feedtide/react sample</h1>
        <p className="subtitle">
          <strong>Provider mode</strong> — config is shared via{" "}
          <code className="code">&lt;FeedTideProvider&gt;</code>. Use this when
          you need hooks or multiple components.
        </p>

        <div className="section">
          <h2>Provider widget</h2>
          <p className="section-desc">
            Wrap your app in{" "}
            <code className="code">&lt;FeedTideProvider&gt;</code> and drop in{" "}
            <code className="code">&lt;FeedTideWidget /&gt;</code>. The widget
            inherits config from the provider. This mode also enables hooks like{" "}
            <code className="code">useFeatures()</code>,{" "}
            <code className="code">useVote()</code>, and{" "}
            <code className="code">useFeedback()</code>.
          </p>
        </div>
      </div>

      <FeedTideWidget position="bottom-right" />
    </FeedTideProvider>
  );
}

export default function App() {
  const [mode, setMode] = useState<Mode>("standalone");

  return (
    <>
      <nav style={{ position: "fixed", top: 16, right: 16, zIndex: 10000, display: "flex", gap: 8 }}>
        <button
          onClick={() => setMode("standalone")}
          style={{
            padding: "6px 14px",
            borderRadius: 6,
            border: "1px solid #ccc",
            background: mode === "standalone" ? "#111" : "#fff",
            color: mode === "standalone" ? "#fff" : "#111",
            cursor: "pointer",
          }}
        >
          Standalone
        </button>
        <button
          onClick={() => setMode("provider")}
          style={{
            padding: "6px 14px",
            borderRadius: 6,
            border: "1px solid #ccc",
            background: mode === "provider" ? "#111" : "#fff",
            color: mode === "provider" ? "#fff" : "#111",
            cursor: "pointer",
          }}
        >
          Provider
        </button>
      </nav>

      {mode === "standalone" ? <StandaloneDemo /> : <ProviderDemo />}
    </>
  );
}
