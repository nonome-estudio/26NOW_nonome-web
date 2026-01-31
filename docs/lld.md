# LLD: Nonome Web (Low-Level Design)

**Project**: nonome-web | **Status**: Draft | **Updated**: 2026-01-31

> Goal: lock a maintainable component/type structure before UI implementation.

## 1) Principles
- **Type-first**: every component has typed props; shared types live in a single place.
- **Single source of truth**: avoid duplicated logic across pages/components.
- **Shared base components**: one `Card` base with variants.
- **Small abstractions**: only abstract when it removes duplication and stays readable.
- **Accessibility**: hover behavior must have keyboard-focus equivalent.

## 2) Folder structure (v1)

```
src/
  pages/
    [lang]/
      index.astro
      architecture.astro
      digital/
        services.astro
        cases.astro
      legal.astro

  components/
    layout/
      Header.astro
      Footer.astro

    ui/
      Card/
        Card.astro
        Card.types.ts
        Card.module.css
      CardGrid/
        CardGrid.astro
        CardGrid.types.ts
        CardGrid.module.css

  content/
    collections.ts

  lib/
    i18n/
      i18n.ts
    content/
      getContent.ts

  types/
    content.ts
    ui.ts

public/
  CNAME
```

## 3) Types

### Language
```ts
export type Lang = 'es' | 'en';
```

### Content types (v1)
Keep content minimal for v1.

```ts
export interface LocalizedText {
  es: string;
  en?: string; // may fallback to ES
}

export interface BaseItem {
  id: string;
  title: LocalizedText;
  description?: LocalizedText;
  code?: string; // internal for now; display TBD
  image?: {
    src: string;
    alt: LocalizedText;
  };
}

export interface Project extends BaseItem {}
export interface Service extends BaseItem {}
export interface Case extends BaseItem {}
```

### UI types (v1)

```ts
export interface CardBaseProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  // v1: hover-only
  href?: never;
}
```

Card variants should remain thin wrappers:
- `ProjectCardProps extends CardBaseProps`
- `ServiceCardProps extends CardBaseProps`
- `CaseCardProps extends CardBaseProps`

## 4) Hover / focus behavior
- Default state: title visible.
- Hover/focus state: card scales subtly and description fades/slides in.
- Delay: parameterized (default TBD; start at 0ms, validate UX later).
- Must support keyboard focus styling.

## 5) Page responsibilities
- Pages:
  - load content for the route and language
  - map content to `CardBaseProps`
  - render `CardGrid`
- Components:
  - no data fetching
  - no language selection logic

## 6) Subagent boundaries (enforced)
- A subagent may modify only one area at a time:
  - `components/ui/*` OR `components/layout/*` OR `lib/*` OR `content/*`
- Any change to public interfaces must be written back:
  - updated `*.types.ts` diff summary
  - list of affected components
