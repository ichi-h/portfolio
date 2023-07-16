---
name: "new-article"
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
