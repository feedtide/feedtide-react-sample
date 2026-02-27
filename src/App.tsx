import { FeedTideProvider, FeedTideWidget } from "@feedtide/react";
import "./App.css";

export default function App() {
  return (
    <FeedTideProvider appId="app_mlvms260Wex3bcTu" theme="shiny-light" >
      <div className="app">
        <h1>@feedtide/react sample</h1>
        <p className="subtitle">
          A demo of the FeedTide React widget. Click the button in the
          bottom-right corner to open the feedback widget.
        </p>

        <div className="section">
          <h2>Drop-in widget</h2>
          <p className="section-desc">
            Just wrap your app in{" "}
            <code className="code">&lt;FeedTideProvider&gt;</code> and drop in{" "}
            <code className="code">&lt;FeedTideWidget /&gt;</code>. The widget
            loads server-rendered content in an iframe — no client-side API
            calls needed.
          </p>
        </div>
      </div>

      {/* The drop-in floating widget */}
      <FeedTideWidget position="bottom-right" />
    </FeedTideProvider>
  );
}
