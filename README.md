# personal-site

Andre Volel's personal site. An Expo Router app that ships as a static web
build, written with React Native primitives so the same components could run
on native later. Web is the only target today.

## Running it

```bash
npm install
npm run web
```

That serves the site at `localhost:8081`. `npm start` gives you the usual Expo
menu if you want to poke at it on a device.

Tailwind config changes are not picked up by fast refresh — restart Metro after
editing `tailwind.config.js` or `src/global.css`.

## Layout

```
src/
  app/
    _layout.tsx    root Stack, header hidden everywhere
    index.tsx      the only route; the entire page
    +html.tsx      static HTML shell (web only, Node-only module)
  components/      presentational pieces, no data of their own
  site.ts          all copy and the project list
  global.css       CSS variables: palette and font stacks
```

There is one route. An earlier version had a `(tabs)` group; it was removed
because a single-page site got nothing from the extra navigator.

Content lives in `src/site.ts`, not inside components. Adding a project means
editing that file. The one constraint is tag colors: `TagColor` is a closed
union because NativeWind resolves class names at build time, so `Tag.tsx` maps
each value to literal class strings. A new color needs a case added there.

## Two things that will bite you

**The browser tab title comes from `<Head>`, not from the shell.** `+html.tsx`
sets a `<title>`, and it is genuinely served — but expo-router wraps every app
in react-helmet-async (`qualified-entry.js`) and hardcodes React Navigation's
`documentTitle` to disabled (`ExpoRoot.js`). On hydration Helmet takes
ownership of `<head>` and strips the server-rendered title if no `<Head>`
declares one, leaving the tab showing the URL. So `index.tsx` renders
`<Head><title>`, and that is the only thing holding the title on web. Setting
`title` in `Stack` `screenOptions` does nothing here. Keep the `+html.tsx`
title in sync by hand — it is what crawlers and the pre-hydration frame see.

**`Pressable` is not an anchor.** react-native-web renders it as a `<div
role="button">`, so `href`/`target`/`rel` passed to it are inert. `ExternalLinkText`
opens links imperatively: `window.open` on web, `expo-web-browser` on native.
The `window.open` call has to stay synchronous inside the press handler — any
`await` before it spends the user gesture and the popup gets blocked. The
tradeoff is a link with no middle-click, no "copy link address", and no
crawlable `href`.

## Styling

NativeWind v4 with Tailwind. Colors and font stacks are CSS variables in
`global.css`, surfaced as Tailwind tokens in `tailwind.config.js`, so the
palette is defined once. The theme is dark-only by design — there is no light
variant and no `.dark:` pairing.

`font-display` / `font-mono` resolve to `var(--font-display)` /
`var(--font-mono)`. That works on web. It is unverified on native, where a
comma-separated CSS font stack is not a valid `fontFamily` — worth checking
before this ever ships to a device. Spline Sans is loaded via a Google Fonts
`<link>` in `+html.tsx`, which is also web-only.

## Docs

Expo moves fast and older answers rot. Use the versioned docs for the SDK this
project pins: <https://docs.expo.dev/versions/v57.0.0/>
