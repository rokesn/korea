---
name: Corrupted route file fix
description: How to handle a 0-byte route file with invalid UTF-8 filename that blocks TanStack router generator
---

## The rule
When a route file has an invalid UTF-8 filename (e.g. `ٺ\udcfc\udcdd\udcfc\udcbc.$slug.tsx`), the Replit sandbox intercepts every syscall that touches the path and rejects it with "invalid utf-8 sequence". You cannot `unlink`, `rename`, or otherwise remove the file via Python ctypes, shell `rm`, or any normal OS call.

**Why:** The Replit sandbox decodes all path arguments as UTF-8 before passing them to the kernel. Invalid-UTF-8 filenames are permanently stuck.

**How to apply:**
1. Create `tsr.config.json` in project root with:
   ```json
   { "routeFileIgnorePattern": "^<first-char-of-corrupted-name>" }
   ```
   The corrupted file in this project starts with `ٺ` (U+067A), so `"^ٺ"` is the pattern.
2. Create a properly-named replacement route file (e.g. `링크.$slug.tsx` with valid UTF-8).
3. The TanStack router generator will ignore the corrupted file, pick up the correct one, and regenerate `routeTree.gen.ts` cleanly.
4. Also restore `src/styles.css` from git if it was lost — the routeTree was the only blocker but styles.css is also easy to lose.
