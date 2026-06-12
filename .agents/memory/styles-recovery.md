---
name: Styles.css recovery
description: src/styles.css can disappear; how to restore it
---

## The rule
`src/styles.css` (Tailwind CSS 4 entry with all CSS custom properties) is imported in `src/routes/__root.tsx` as `"../styles.css?url"`. If this file is missing, the entire app fails with a 500 (can't resolve import).

**Why:** The file is not re-generated automatically — it's a static asset committed in git.

**How to apply:**
```bash
git show aa71c6d:src/styles.css > src/styles.css
```
Replace `aa71c6d` with any early commit that has the file. The initial commit (`aa71c6d`) always has it for the 주소모아 project.
