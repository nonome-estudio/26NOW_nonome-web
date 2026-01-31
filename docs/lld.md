# LLD: Nonome Web (Low-Level Design)

> Goal: lock a maintainable component/type structure before UI implementation.

## Principles
- **Type-first**: every component has typed props; shared types live in a single place.
- **Single source of truth**: avoid duplicated logic across pages/components.
- **Shared base components**: e.g. one `Card` base with variants.
- **Small abstractions**: only abstract when it removes duplication and stays readable.

## Proposed folders (draft)

```
src/
  components/
    ui/
      Card/
        Card.astro
        Card.types.ts
        Card.css
        variants/
          ProjectCard.astro
          ServiceCard.astro
          CaseCard.astro
    layout/
      Header.astro
      Footer.astro
  lib/
    content/
      loadContent.ts
    i18n/
      i18n.ts
  types/
    content.ts
    ui.ts
  content/
    ... (Astro content collections)
```

## Interfaces (draft)

### Card base
- `CardBaseProps`
  - `title: string`
  - `code?: string`
  - `href?: never` (v1 hover-only; no click)
  - `description?: string` (only revealed on hover)

### Variants
- `ProjectCardProps extends CardBaseProps`
  - `year: number`
- `ServiceCardProps extends CardBaseProps`
- `CaseCardProps extends CardBaseProps`

## Hover behavior
- Default: show title.
- On hover (optional delay): subtle scale + reveal description.
- Must also work via keyboard focus.

## Decisions needed
- Hover delay (0–500ms)
- Card scale amount (e.g. 1.02–1.05)
- Whether codes are visible badge or internal only
