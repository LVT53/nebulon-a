/* Note: `steps` holds article ids in reading order. Position and length come from the array. */

export const paths = [
  {
    id: 'black-holes',
    slug: 'black-holes',
    title: 'Black Holes',
    description:
      'Four reads, from what a black hole is to why it spins and what that does to everything near it.',
    steps: [
      'black-hole-time',
      'photographing-a-shadow',
      'event-horizon',
      'black-hole-spin',
    ],
  },
  {
    id: 'our-solar-system',
    slug: 'our-solar-system',
    title: 'Our Solar System',
    description:
      'One planet at a time, with the moons and rings left in. Start anywhere, but this order helps.',
    steps: ['jupiter-moons', 'rings', 'uranus', 'mars-water'],
  },
  {
    id: 'going-to-space',
    slug: 'going-to-space',
    title: 'Going to Space',
    description:
      'What a launch actually does, why the first two minutes decide the rest, and what it costs.',
    steps: ['rockets-go-up', 'first-two-minutes', 'reusable-boosters', 'launch-costs'],
  },
  {
    id: 'reading-the-universe',
    slug: 'reading-the-universe',
    title: 'Reading the Universe',
    description:
      'The machines that do the looking, and the engineering that keeps them alive long enough to matter.',
    steps: [
      'furthest-telescope',
      'mars-suits',
      'ion-engines',
      'rover-driving',
    ],
  },
]
