# feedtide-react-sample

Sample React app demonstrating [`@feedtide/react`](https://github.com/feedtide/feedtide-react) — a feedback widget and hook set for collecting feature votes and user feedback.

This project doubles as a **development testbed** (linked to the local library) and a **usage example** for consumers of the npm package.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

## What's included

The sample demonstrates two ways to use `<FeedTideWidget />`. Toggle between them using the buttons in the top-right corner.

### Standalone mode

Config props (`appId`, `theme`, etc.) are passed directly to `<FeedTideWidget />` — no provider needed. Best for simple, single-widget setups.

```tsx
<FeedTideWidget appId="app_abc" theme="shiny-light" position="bottom-right" />
```

### Provider mode

Config is shared via `<FeedTideProvider>`, and the widget inherits it from context. Use this when you need hooks (`useFeatures`, `useVote`, `useFeedback`) or multiple components sharing config.

```tsx
<FeedTideProvider appId="app_abc" theme="shiny-light">
  <FeedTideWidget position="bottom-right" />
</FeedTideProvider>
```

Props passed directly to the widget override provider values, so both approaches can be mixed.

## Local development (linked library)

By default, `@feedtide/react` is linked via `file:../feedtide-react` in `package.json`. This means changes to the library are picked up immediately (after rebuilding the library with `pnpm build` or running `pnpm dev` in the library repo).

To switch to the published npm package instead:

```diff
- "@feedtide/react": "file:../feedtide-react",
+ "@feedtide/react": "^0.1.0",
```

Then run `pnpm install`.
