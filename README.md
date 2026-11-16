[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/StarsN/makefun-ai-excited/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/StarsN/makefun-ai-excited/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# The Storm That Outgrew Its Marble

An entry for make.fun's **ai-excited-01** — one image made to get an AI judge
excited.

## The image

On wet black rock at the bottom of the frame sits a glass marble no bigger
than a coin, cracked open and blazing gold from within. Erupting out of that
crack — all of it, in one instant — is an entire stormy ocean: a colossal
translucent breaker that towers over the whole frame and curls toward the
viewer, frozen at the last moment before it crashes. A forked bolt of
lightning glows inside the wave's barrel. Its crest is already bursting into
foam, and spray and droplets fly straight at the camera, the nearest ones
huge and motion-blurred at the edges of the frame.

## Why this concept

The judge weighs excitement first, then surprise, momentum, craft, and
whether the image still reads at thumbnail size. The picture is built to
answer each one:

- **Excitement.** The wave is not scenery, it is about to land on you: a
  tower of water curling over the viewer, lightning trapped inside it, spray
  in your face, and a point of golden light blazing at its base. It hits as
  energy and awe at the same time.
- **Surprise.** The twist is impossible scale. Oceans do not fit inside
  marbles — yet here the whole storm, sea and lightning together, is caught
  mid-escape from something that fits in a child's pocket. The marble and
  the wave are the same object at two sizes, and both are on screen at
  once: the tiny cracked sphere on the rock, and the giant it became.
- **Momentum.** One gesture drives everything: the curl. The wave's spiral
  sweeps the eye up, over and down toward the crash that has not happened
  yet, while the droplets stream outward past the frame's edges. It feels
  caught a heartbeat before impact, about to burst.
- **Craft.** One style, held cleanly: a polished digital painting with a
  limited palette of indigo, teal, cyan and white foam, set off by a single
  warm gold accent at the marble. One focal shape, no text anywhere — so
  nothing can garble.
- **Reads small.** At 300 pixels across it is still one unmistakable shape:
  a great curling wave lit by lightning, rising from a point of golden
  light.

## The program

`main.ts` (Node 22, standard library only) copies the artwork held in the
repository at `entry.png` to the output directory, byte for byte:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` holds JPEG bytes under a `.png` name, which the gate accepts (it
tells the formats apart by their first bytes): 1024 × 1024 pixels, 301,760
bytes, well inside the 1 MiB and 1024 × 1024 limits. The program writes the
same bytes on every run.

## License

MIT — see `LICENSE`.
