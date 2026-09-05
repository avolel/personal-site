# personal-site

Single-route Expo Router site, static web output. Web is the only target that
currently matters; keep native from breaking, but don't design for it.

`README.md` describes the layout and how to run it. What follows is the set of
things that have already caused wrong code to be written here.

## Verify against v57 docs, not memory

Expo's API surface has churned. Before writing anything that touches expo-*
packages or router behaviour, read <https://docs.expo.dev/versions/v57.0.0/>.
Answers from older SDKs are frequently wrong in ways that still typecheck.

## The web tab title is Helmet's, not the shell's

`+html.tsx` sets a `<title>` and the server really does send it. It gets
stripped on hydration: expo-router wraps every app in react-helmet-async
(`qualified-entry.js`) and hardcodes `documentTitle: { enabled: false }`
(`ExpoRoot.js`), so Helmet owns `<head>` and removes a server-rendered title
that no `<Head>` claims. The tab then falls back to the URL.

The title is held by `<Head><title>` in `index.tsx`. Consequences:

- Adding `title` to `Stack` `screenOptions` does nothing on web. It is not the
  fix, and suggesting it wastes a round trip.
- `Head` calls `useIsFocused` and returns null when unfocused, so it belongs
  inside a screen, not in `_layout.tsx`.
- `+html.tsx` and the `<Head>` title must be kept in sync by hand.

## `Pressable` does not render an anchor

react-native-web renders it as `<div role="button">`. `href`, `target`, and
`rel` spread onto it are silently dropped — there is no link for the browser to
follow. react-native-web's own idiom is `href` + `hrefAttrs`, not bare
`target`.

`ExternalLinkText` deliberately goes imperative instead: `window.open` on web,
`expo-web-browser` on native. Do not add an `await` above that `window.open`
call and do not make the handler `async` — the popup blocker fires the moment
the user gesture is spent. The accepted cost is no middle-click, no copyable
link address, no crawlable href.

## Content is data, not JSX

Copy and the project list live in `src/site.ts`. Components render it and hold
none of their own. Adding a project is a `site.ts` edit.

`TagColor` is a closed union on purpose: NativeWind resolves class names at
build time, so `Tag.tsx` maps each color to literal class strings. Dynamic or
interpolated class names will compile and then render unstyled. A new color
means a new case in that map.

## Styling

NativeWind v4 + Tailwind, dark-only, no light variant. Palette and font stacks
are CSS variables in `global.css`, surfaced as tokens in `tailwind.config.js`.

`fontFamily` belongs directly under `theme.extend`. A nested `extend` inside
`theme.extend` is read as a theme key literally named "extend" and silently
does nothing — this shipped once and left `font-display` inert for a while.

Metro does not hot-reload `tailwind.config.js` or `global.css`. Restart before
concluding a styling change didn't work.

## Git

Never commit. Stage and draft a message; the human runs `git commit`.
