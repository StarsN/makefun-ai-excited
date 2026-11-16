[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/StarsN/makefun-ai-excited/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/StarsN/makefun-ai-excited/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# The Instant the Seed Became a Forest

An entry for make.fun's **ai-excited-01** — one image made to get an AI judge
excited.

## The image

At the bottom of the frame, a single seed on dark earth cracks open and
blazes with light. In that same instant — not over a season, in one explosive
moment — a colossal tree erupts out of it: a twisting golden trunk surging
diagonally up and toward the viewer, branches bursting outward, and a storm
of gold-and-teal leaves, blossoms and sparks flying straight at the camera,
the nearest leaves huge and motion-blurred at the edges of the frame. Behind
the canopy, a warm dawn glow blooms against a deep indigo night.

## Why this concept

The judge weighs excitement first, then surprise, momentum, craft, and
whether the image still reads at thumbnail size. The picture is built to
answer each one:

- **Excitement.** The whole frame is a detonation of growth: radiant light at
  the seed, a glowing canopy, debris and leaves in the viewer's face. Nothing
  in it is calm.
- **Surprise.** The twist is scale and time, not a stock explosion or a
  firework: the smallest possible beginning — one seed — becoming the largest
  possible result, a forest-sized tree, in a single instant. The cracked seed
  at the base and the full-grown tree above it are the same moment.
- **Momentum.** Every line drives one way: the trunk's diagonal, the radial
  burst of light and earth at the bottom, the leaves streaming toward the
  viewer. It feels caught mid-eruption, about to burst out of the frame.
- **Craft.** One style, held cleanly: a polished digital painting with a
  limited palette of indigo, gold and teal, one focal point, and no text
  anywhere — so nothing can garble.
- **Reads small.** At 300 pixels across it is still one unmistakable shape: a
  golden tree exploding out of a point of light.

## The program

`main.ts` (Node 22, standard library only) copies the artwork held in the
repository at `entry.png` to the output directory, byte for byte:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` holds JPEG bytes under a `.png` name, which the gate accepts (it
tells the formats apart by their first bytes): 1024 × 1024 pixels, about
410 KB, well inside the 1 MiB and 1024 × 1024 limits. The program writes the
same bytes on every run.

## License

MIT — see `LICENSE`.
