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

- **Drop-in widget** — the floating `<FeedTideWidget />` FAB in the bottom-right corner
- **Headless hooks demo** — custom UI built with `useFeatures()`, `useVote()`, and `useFeedback()`
- **Mock API server** — a zero-dependency Vite middleware plugin that handles `/api/features`, `/api/vote`, and `/api/feedback` with in-memory state

## Local development (linked library)

By default, `@feedtide/react` is linked via `file:../feedtide-react` in `package.json`. This means changes to the library are picked up immediately (after rebuilding the library with `pnpm build` or running `pnpm dev` in the library repo).

To switch to the published npm package instead:

```diff
- "@feedtide/react": "file:../feedtide-react",
+ "@feedtide/react": "^0.1.0",
```

Then run `pnpm install`.
