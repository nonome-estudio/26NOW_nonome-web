# Content blocks

This project uses Astro content collections (`src/content`) with a simple `content` array of blocks.

## Why
- Keep authoring simple (frontmatter-driven)
- Allow mixing text + media
- Make the detail page renderer reusable across collections
- Leave room for future interactive embeds (IFC viewer / Three.js)

## Block types

### text
```yaml
- type: text
  markdown: |-
    ## Heading
    Some **markdown**.
```

### image
```yaml
- type: image
  src: /images/foo.png
  alt: Foo
  caption:
    es: Pie de foto
    en: Caption
```

### video (self-hosted)
Store the file under `public/` and reference it by URL.
```yaml
- type: video
  src: /videos/demo.mp4
  poster: /images/posters/demo.jpg
  caption:
    es: Demo
```

### embed (iframe)
Useful for YouTube/Vimeo or any iframe URL.
```yaml
- type: embed
  provider: youtube
  url: https://www.youtube.com/watch?v=dQw4w9WgXcQ
  title: Video
```

### widget (future)
Reserved for interactive components (IFC viewer / Three.js / custom iframe wrappers).

```yaml
- type: widget
  name: ifcViewer
  props:
    src: /models/demo.ifc
```

Notes:
- Widgets are intentionally allow-listed by name.
- Current implementation renders a placeholder box; the goal is to swap in real components later without changing content structure.
