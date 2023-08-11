---
name: "new-work"
root: "."
output: "."
ignore: []
questions:
  slug: "Please enter a slug."
---

# `./pages/{{ inputs.slug }}/{{ currentDate }}.md`

```markdown
---
title: "required"
description: "required"
thumbnail: ""
tags: []
publish: false
---

## Title
```

# `./pages/{{ inputs.slug }}/index.ts`

```typescript
import {{ inputs.slug }}_1 from "./{{ currentDate }}.md";

export const {{ inputs.slug | constant }} = [
  {{ inputs.slug }}_1,
];
```
