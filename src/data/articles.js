// Body blocks: { type: 'p' | 'h2' | 'quote',  text }  |  { type: 'list', items[] }  |  { type: 'figure', src, caption, credit }
export const articles = [
  {
    id: 'black-hole-time',
    slug: 'why-a-black-hole-bends-time',
    title: 'Why a black hole bends time instead of space',
    category: 'deep-space',
    date: '2026-08-14',
    readingTime: 2,
    excerpt:
      'Gravity is geometry: near something heavy, the lines that time runs along get longer.',
    image: '/img/black-hole-time.jpg',
    credit: 'NASA/JPL-Caltech',
    pathId: 'black-holes',
    step: 1,
    gist: {
      text: 'A black hole is not a hole. It is a place where gravity has beaten every other force, and the strange part is what that does to time.',
      terms: [
        {
          term: 'Event horizon',
          definition: 'The edge where escape velocity passes the speed of light.',
        },
        {
          term: 'Gravitational redshift',
          definition: 'Light losing energy as it climbs out of a gravity well.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'Two clocks do not have to be broken to disagree. Put one at your feet and one on the roof of the same building. The difference is real, it is measurable, and it grows with height.',
      },
      {
        type: 'p',
        text: 'Scale that up and the effect stops being a curiosity. Near something as heavy as a black hole, time does not run slowly in the way a watch runs slow. The geometry underneath it changes.',
      },
      { type: 'h2', text: 'Where the time goes' },
      {
        type: 'p',
        text: 'An observer far away watches a falling clock slow, then stop. The light coming off it stretches towards red until there is almost nothing left to see. Nothing is actually stuck: the falling clock notices nothing unusual at the moment it crosses.',
      },
      {
        type: 'quote',
        text: 'The black hole does not slow the clock. It bends the road the clock is travelling on.',
      },
      {
        type: 'list',
        items: [
          'Mass curves the space around it, and the time along it.',
          'A clock deeper in the well accumulates less time than one above it.',
          'At the horizon the two rates separate so far that outside observers never see the crossing finish.',
        ],
      },
      {
        type: 'p',
        text: 'That is the whole trick. Gravity is not a pull applied from outside, it is the shape of the road. Near a black hole the road bends so sharply that one direction — towards the centre — becomes the only one left.',
      },
      {
        type: 'figure',
        src: '/img/figures/black-hole-time-1.jpg',
        caption:
          'Matter piling into a disc around a black hole. The dark patch is the last light that could still escape.',
        credit: 'NASA/JPL-Caltech',
      },
      {
        type: 'figure',
        src: '/img/figures/black-hole-time-2.jpg',
        caption: 'The same region in infrared, where the dust glows through the gas.',
        credit: 'NASA/ESA/STScI',
      },
    ],
  },
  {
    id: 'photographing-a-shadow',
    slug: 'how-we-photographed-a-shadow',
    title: 'How we photographed a shadow',
    category: 'deep-space',
    date: '2026-08-12',
    readingTime: 1,
    excerpt:
      'Eight telescopes across four continents turned a patch of sky into a single camera.',
    image: '/img/photographing-a-shadow.jpg',
    credit: 'NASA/JPL-Caltech',
    pathId: 'black-holes',
    step: 2,
    gist: {
      text: 'The famous picture is not of a black hole. It is of the empty space where one is, ringed by the light that nearly escaped.',
      terms: [
        {
          term: 'Very long baseline interferometry',
          definition: 'Linking distant dishes so they behave as one enormous telescope.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'The image is a bright ring with a dark middle. The ring is gas moving fast enough to glow; the middle is the shadow, the region from which no light reaches us.',
      },
      {
        type: 'p',
        text: 'Eight radio dishes spread across four continents ran on atomic clocks so their recordings could be aligned later. The result took two years to process.',
      },
      {
        type: 'list',
        items: [
          'Each dish recorded raw data onto hard drives, flown out physically.',
          'The drives were combined at two correlation centres.',
          'The ring came out about the size of a tennis ball on the Moon.',
        ],
      },
    ],
  },
  {
    id: 'jupiter-moons',
    slug: 'what-the-moons-of-jupiter-are-hiding',
    title: 'What the moons of Jupiter are hiding',
    category: 'our-solar-system',
    date: '2026-08-11',
    readingTime: 2,
    excerpt:
      'Europa is the most likely place for life in the solar system, and it is wrapped in ice.',
    image: '/img/jupiter-moons.jpg',
    credit: 'NASA/JPL-Caltech/SwRI/MSSS',
    pathId: 'our-solar-system',
    step: 1,
    gist: {
      text: 'Under Europa’s cracked ice there is more liquid water than every ocean on Earth combined. Nothing else in the solar system is quite that promising.',
      terms: [
        {
          term: 'Tidal heating',
          definition:
            'Friction from a moon being stretched by its planet, which keeps water liquid.',
        },
        {
          term: 'Ice shell',
          definition: 'The frozen crust floating on top of that ocean.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'Galileo found four moons around Jupiter in 1610 and changed the argument about what orbits what. Four centuries later we have counted ninety-five, and the interesting ones are still the first four.',
      },
      {
        type: 'p',
        text: 'Europa is about the size of our Moon and covered in cracked ice. Underneath it, most likely, is an ocean with twice the volume of every ocean on Earth put together.',
      },
      { type: 'h2', text: 'The ocean under the ice' },
      {
        type: 'p',
        text: 'Jupiter pulls harder on one side of Europa than the other. The difference stretches and squeezes the moon, and the friction keeps the water liquid with no sunlight involved at all.',
      },
      {
        type: 'quote',
        text: 'Tidal heating is why a moon five times further from the Sun than us can still have liquid water.',
      },
      {
        type: 'list',
        items: [
          'Io, the innermost moon, is heated so hard it is the most volcanic body we know of.',
          'Europa sits further out, where the heating is gentler and the ice survives.',
          'Ganymede and Callisto are colder still, and probably frozen solid.',
        ],
      },
      {
        type: 'figure',
        src: '/img/figures/jupiter-moons-1.jpg',
        caption:
          'Europa, photographed by Juno. The dark streaks are fractures in the ice shell.',
        credit: 'NASA/JPL-Caltech/SwRI/MSSS',
      },
      {
        type: 'figure',
        src: '/img/figures/jupiter-moons-2.jpg',
        caption: 'The four Galilean moons to scale, from Io outward to Callisto.',
        credit: 'NASA/JPL-Caltech',
      },
    ],
  },
  {
    id: 'event-horizon',
    slug: 'what-actually-happens-at-the-horizon',
    title: 'What actually happens at the horizon',
    category: 'deep-space',
    date: '2026-08-09',
    readingTime: 1,
    excerpt: 'The horizon is not a surface. It is the last place where leaving is still possible.',
    image: '/img/event-horizon.jpg',
    credit: 'NASA/JPL-Caltech',
    pathId: 'black-holes',
    step: 3,
    gist: {
      text: 'Nothing dramatic happens as you cross. The drama is entirely in what is no longer possible afterwards.',
      terms: [
        {
          term: 'Spaghettification',
          definition: 'Being stretched along the direction of fall and squeezed across it.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'A falling astronaut crosses the horizon without noticing and could still see the sky behind them for a while. The boundary exists only in the sense that afterwards, every direction that leads out has closed.',
      },
      {
        type: 'p',
        text: 'From outside, the same crossing never quite finishes. The light gets slower and redder, the clock appears to stop, which is why the horizon looks like a surface even though there is nothing there.',
      },
      {
        type: 'list',
        items: [
          'Small black holes tear you apart long before you reach the horizon.',
          'Around a supermassive one, you could cross without noticing at all.',
        ],
      },
    ],
  },
  {
    id: 'rockets-go-up',
    slug: 'why-rockets-go-up-and-not-sideways',
    title: 'Why rockets go up and not sideways',
    category: 'rockets-launches',
    date: '2026-08-06',
    readingTime: 1,
    excerpt: 'A rocket does not fly. It is pushed, and the difference matters.',
    image: '/img/rockets-go-up.jpg',
    credit: 'NASA',
    pathId: 'going-to-space',
    step: 1,
    gist: {
      text: 'A rocket carries its own air supply and throws it backwards. That is why it works in vacuum, and why it points mostly sideways once it is high enough.',
      terms: [
        {
          term: 'Delta-v',
          definition: 'The total change in speed a rocket can produce — its real budget.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'Wings need air to push against. A rocket carries its own reaction mass and throws it backwards, so it works in vacuum, and it works the same whichever direction it happens to be pointing.',
      },
      {
        type: 'p',
        text: 'That is why the first seconds look wrong: the vehicle rises straight up, then slowly tips towards the horizontal.',
      },
      {
        type: 'quote',
        text: 'Orbit is not about going up. It is about going sideways fast enough that you keep missing the ground.',
      },
    ],
  },
  {
    id: 'five-things',
    slug: 'five-things-to-see-this-month',
    title: 'Five things to see this month',
    category: 'stargazing',
    date: '2026-08-04',
    readingTime: 1,
    excerpt: 'Two planets, a cluster, a galaxy and a space station, none of which need a telescope.',
    image: '/img/five-things.jpg',
    credit: 'NASA',
    gist: {
      text: 'Everything on this list is visible with your eyes or the cheapest binoculars you can borrow.',
      terms: [
        {
          term: 'Dark adaptation',
          definition: 'The fifteen minutes your eyes need before faint things appear.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'Saturn is up in the south after midnight and needs nothing but your eyes. Cheap binoculars show the rings as a lump on either side, which is how Galileo first saw them and mistook them for handles.',
      },
      {
        type: 'p',
        text: 'The rest of the list is more forgiving: the Pleiades, the Andromeda galaxy as a smudge, and a bright pass of the space station.',
      },
      {
        type: 'list',
        items: [
          'Saturn, late evening, south.',
          'The Pleiades, high in the east after dark.',
          'The space station, on a timed pass — worth planning rather than guessing.',
        ],
      },
    ],
  },
  {
    id: 'first-two-minutes',
    slug: 'the-first-two-minutes-decide-everything',
    title: 'The first two minutes decide everything',
    category: 'rockets-launches',
    date: '2026-08-02',
    readingTime: 1,
    excerpt:
      'Most of the energy goes into the first hundred seconds, and most of the risk goes with it.',
    image: '/img/first-two-minutes.jpg',
    credit: 'NASA',
    pathId: 'going-to-space',
    step: 2,
    gist: {
      text: 'A rocket leaves the pad slowly because it is enormous. Everything that makes a launch dangerous happens while the air is still thick.',
      terms: [
        {
          term: 'Max Q',
          definition: 'The moment of highest aerodynamic pressure on the vehicle.',
        },
        {
          term: 'Staging',
          definition: 'Dropping empty hardware so the rest has less mass to push.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'A rocket leaves the pad slowly, which surprises people. It weighs thousands of tonnes and the engines produce just enough thrust to lift it. The acceleration builds as the fuel burns off.',
      },
      {
        type: 'p',
        text: 'By the time it clears the tower it is already lighter than it was at ignition, and everything after that gets easier.',
      },
      { type: 'h2', text: 'Max Q' },
      {
        type: 'p',
        text: 'Roughly a minute in, the vehicle hits maximum aerodynamic pressure. The engines throttle down deliberately. The structure could take the load, but there is no reason to spend the margin.',
      },
      {
        type: 'quote',
        text: 'The first two minutes are the only part of the flight where the atmosphere is both the obstacle and the thing keeping you alive.',
      },
      {
        type: 'list',
        items: [
          'Liftoff to tower clear: ten seconds, full thrust.',
          'Max Q: around seventy seconds, engines throttled back.',
          'Staging: two to three minutes, and the hardest part is over.',
        ],
      },
      {
        type: 'figure',
        src: '/img/figures/first-two-minutes-1.jpg',
        caption: 'A launch clears the tower. The first minute is the slowest and the heaviest.',
        credit: 'NASA',
      },
      {
        type: 'figure',
        src: '/img/figures/first-two-minutes-2.jpg',
        caption: 'Staging, seen from a tracking camera. The empty stage falls away first.',
        credit: 'NASA',
      },
    ],
  },
  {
    id: 'no-telescope',
    slug: 'no-telescope-no-problem',
    title: 'No telescope, no problem',
    category: 'stargazing',
    date: '2026-07-30',
    readingTime: 1,
    excerpt: 'Binoculars beat a cheap telescope, and your eyes beat both for some things.',
    image: '/img/no-telescope.jpg',
    credit: 'NASA',
    gist: {
      text: 'A borrowed pair of binoculars will show you more tonight than a cheap telescope will show you next month.',
      terms: [
        {
          term: 'Aperture',
          definition:
            'The width of the opening collecting light — the number that actually matters.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'A pair of 10×50 binoculars costs less than a starter telescope and shows more: the moons of Jupiter, the craters on our Moon, the Pleiades as actual stars rather than a smudge.',
      },
      {
        type: 'p',
        text: 'The trick is holding them still. Lie on your back, rest your elbows on your ribs, and most of the shake disappears.',
      },
      {
        type: 'list',
        items: [
          '10×50 is the useful size. Bigger is heavier and gets used less.',
          'A tripod adapter costs very little and fixes the shake completely.',
          'Look at the Moon when it is half lit — the shadow line shows detail.',
        ],
      },
    ],
  },
  {
    id: 'furthest-telescope',
    slug: 'the-telescope-that-looked-back-furthest',
    title: 'The telescope that looked back furthest',
    category: 'space-technology',
    date: '2026-07-28',
    readingTime: 1,
    excerpt:
      'To see the first galaxies you have to look in infrared, and to do that you have to keep the mirror cold.',
    image: '/img/furthest-telescope.jpg',
    credit: 'NASA/ESA/STScI',
    pathId: 'reading-the-universe',
    step: 1,
    gist: {
      text: 'The oldest light in the universe arrives as infrared, and infrared is exactly what a warm telescope would drown in.',
      terms: [
        {
          term: 'Redshift',
          definition: 'Light stretched to longer wavelengths by the expansion of space.',
        },
        {
          term: 'Sunshield',
          definition: 'Five thin layers that radiate heat away instead of conducting it through.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'Light from the earliest galaxies has been travelling for thirteen billion years, and in that time the expansion of the universe has stretched it out of the visible range.',
      },
      {
        type: 'p',
        text: 'Infrared is also what everything warm emits. A mirror at room temperature would glow brighter than the thing it is trying to see.',
      },
      { type: 'h2', text: 'Why it had to be cold' },
      {
        type: 'p',
        text: 'A five-layer sunshield the size of a tennis court keeps the mirror near forty kelvin. The layers are thin enough to flex and spaced so heat radiates out between them rather than conducting through.',
      },
      {
        type: 'quote',
        text: 'The telescope is not pointed at the dark. It is pointed at the cold, because that is where the oldest light ended up.',
      },
      {
        type: 'list',
        items: [
          'Optical light from the first galaxies no longer reaches us at all.',
          'Infrared passes through dust that blocks everything else.',
          'The mirror has to be cold, or its own glow ruins every exposure.',
        ],
      },
      {
        type: 'figure',
        src: '/img/figures/furthest-telescope-1.jpg',
        caption: 'The first deep field. Almost every point in the frame is a galaxy.',
        credit: 'NASA/ESA/STScI',
      },
      {
        type: 'figure',
        src: '/img/figures/furthest-telescope-2.jpg',
        caption: 'The sunshield during a deployment test, five layers thin enough to flex.',
        credit: 'NASA/Chris Gunn',
      },
    ],
  },
  {
    id: 'reusable-boosters',
    slug: 'reusable-boosters-explained-slowly',
    title: 'Reusable boosters, explained slowly',
    category: 'rockets-launches',
    date: '2026-07-26',
    readingTime: 1,
    excerpt: 'Landing the first stage is less impressive than the fact that it saves money.',
    image: '/img/reusable-boosters.jpg',
    credit: 'NASA',
    pathId: 'going-to-space',
    step: 3,
    gist: {
      text: 'The propellant is cheap. The rocket is not. Reuse is an argument about hardware, not fuel.',
      terms: [
        {
          term: 'Refurbishment',
          definition: 'The inspection and repair between flights — the real cost of reuse.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'A booster is most of the cost of a launch and used to be most of the waste. Flying it back and again turns a one-off expense into a smaller recurring one.',
      },
      {
        type: 'p',
        text: 'The landing itself is a controlled fall. The engine relights, the grid fins steer, and the last few metres are a single engine throttled so far down that the vehicle is almost hovering.',
      },
      {
        type: 'list',
        items: [
          'Boostback burn: turns the stage around while it still has fuel.',
          'Entry burn: slows it before the atmosphere does the rest.',
          'Landing burn: one engine, seconds before touchdown.',
        ],
      },
    ],
  },
  {
    id: 'black-hole-spin',
    slug: 'why-black-holes-spin',
    title: 'Why black holes spin, and why that matters',
    category: 'deep-space',
    date: '2026-07-24',
    readingTime: 1,
    excerpt: 'Almost every black hole spins, and the spin drags space around with it.',
    image: '/img/black-hole-spin.jpg',
    credit: 'NASA/JPL-Caltech',
    pathId: 'black-holes',
    step: 4,
    gist: {
      text: 'A spinning black hole drags the space around it, forcing everything nearby into the same direction.',
      terms: [
        {
          term: 'Frame dragging',
          definition: 'Rotating mass pulling spacetime around with it.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'A black hole formed from a collapsing star keeps the rotation of that star, compressed into something a few kilometres across.',
      },
      {
        type: 'p',
        text: 'That spin drags the surrounding spacetime with it, so anything falling in is forced to orbit the same way. Astronomers measure the effect on the accretion disc and use it to work out how the hole formed.',
      },
      {
        type: 'list',
        items: [
          'The spin rate can approach the theoretical maximum.',
          'It powers jets that leave the galaxy entirely.',
        ],
      },
    ],
  },
  {
    id: 'mars-suits',
    slug: 'the-suits-we-will-wear-on-mars',
    title: 'The suits we will wear on Mars',
    category: 'space-technology',
    date: '2026-07-21',
    readingTime: 1,
    excerpt: 'A suit for Mars has to do everything the Apollo suit did, for two years, in dust.',
    image: '/img/mars-suits.jpg',
    credit: 'NASA',
    pathId: 'reading-the-universe',
    step: 2,
    gist: {
      text: 'Apollo suits lasted three days and were thrown away. A Mars suit has to be repaired in the field, by the person wearing it.',
      terms: [
        {
          term: 'Perchlorate dust',
          definition: 'The abrasive, mildly toxic soil covering most of Mars.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'The suits worn on the Moon were built for three days and thrown away. A Mars suit has to survive years of dust that is abrasive and mildly toxic, and be repaired on the surface.',
      },
      {
        type: 'p',
        text: 'The other problem is pressure. A soft suit at full pressure is stiff enough to fight you on every movement, which is why most current research is about joints.',
      },
      {
        type: 'quote',
        text: 'Every design decision is a trade: more pressure means more protection and less ability to bend your elbow.',
      },
    ],
  },
  {
    id: 'apollo-decisions',
    slug: 'apollo-in-eight-decisions',
    title: 'Apollo, in eight decisions',
    category: 'space-history',
    date: '2026-07-20',
    readingTime: 1,
    excerpt: 'Eight choices between 1961 and 1969 that decided whether anyone reached the Moon.',
    image: '/img/apollo-decisions.jpg',
    credit: 'NASA',
    gist: {
      text: 'Apollo was not one engineering miracle. It was a series of decisions, several of them wrong at first and expensive to reverse.',
      terms: [
        {
          term: 'Lunar orbit rendezvous',
          definition:
            'Meeting in orbit around the Moon rather than flying there and back in one ship.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'Apollo is usually told as a story of engineering. It is better understood as a series of decisions, several of which were wrong at first and expensive to reverse.',
      },
      {
        type: 'p',
        text: 'The first was to go at all. Kennedy set the deadline before anyone knew how, which forced the programme to work backwards from a date rather than forwards from what was possible.',
      },
      { type: 'h2', text: 'The decision that saved it' },
      {
        type: 'p',
        text: 'Lunar orbit rendezvous made the schedule possible. The alternative, a direct ascent from Earth, would have needed a rocket larger than anything on the drawing board.',
      },
      {
        type: 'quote',
        text: 'We chose to go to the Moon in this decade, not because it was easy, but because it forced every later decision to be made quickly.',
      },
      {
        type: 'list',
        items: [
          '1961: commit to the Moon before the method exists.',
          '1962: choose lunar orbit rendezvous over direct ascent.',
          '1967: switch to all-up testing after the Apollo 1 fire.',
        ],
      },
      {
        type: 'figure',
        src: '/img/figures/apollo-decisions-1.jpg',
        caption:
          'Apollo 11 from the lunar module. The descent stage is the only part that landed.',
        credit: 'NASA',
      },
      {
        type: 'figure',
        src: '/img/figures/apollo-decisions-2.jpg',
        caption: 'The crew of Apollo 1, whose deaths forced the testing decision.',
        credit: 'NASA',
      },
    ],
  },
  {
    id: 'rings',
    slug: 'rings-and-why-everything-has-them',
    title: 'Rings, and why nearly everything has them',
    category: 'our-solar-system',
    date: '2026-07-19',
    readingTime: 1,
    excerpt: 'Rings are not rare. They are just temporary, which is why we only see four.',
    image: '/img/rings.jpg',
    credit: 'NASA/JPL-Caltech',
    pathId: 'our-solar-system',
    step: 2,
    gist: {
      text: 'Every gas giant has rings. None of them will last, which is why we happen to be alive at the right moment to see them.',
      terms: [
        {
          term: 'Roche limit',
          definition: 'The distance inside which a moon gets pulled apart into a ring.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'Every gas giant in our solar system has rings of some kind. They are made of ice and rock, from grains of dust up to house-sized blocks, and each one orbits at its own speed.',
      },
      {
        type: 'p',
        text: 'They are also short-lived by astronomical standards. Dust falls in, moons sweep lanes clear, and a ring system that looks permanent has probably existed for less time than human beings.',
      },
      {
        type: 'list',
        items: [
          'Saturn’s rings are ice, which is why they are bright.',
          'Jupiter’s are dust, thrown off by its volcanic moon Io.',
          'Uranus has narrow rings found by accident during a stellar occultation.',
        ],
      },
    ],
  },
  {
    id: 'launch-costs',
    slug: 'what-a-launch-costs-and-why',
    title: 'What a launch costs, and why',
    category: 'rockets-launches',
    date: '2026-07-18',
    readingTime: 1,
    excerpt: 'The price of a launch is mostly the price of the rocket, and the rocket is thrown away.',
    image: '/img/launch-costs.jpg',
    credit: 'NASA',
    pathId: 'going-to-space',
    step: 4,
    gist: {
      text: 'Fuel is a rounding error. What you are paying for is a very large, very precise machine that gets used once.',
      terms: [
        {
          term: 'Payload fraction',
          definition: 'The share of the launch mass that is actually the customer’s cargo.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'A medium launch costs somewhere between a large house and a small block of flats, depending on who is buying and how much of the vehicle comes back.',
      },
      {
        type: 'p',
        text: 'That is the whole argument for reuse. Every kilogram of structure you fly again is a kilogram you do not have to build, test and certify.',
      },
      {
        type: 'list',
        items: [
          'Propellant: a few hundred thousand euros, at most.',
          'Structure and engines: the overwhelming majority of the price.',
          'Range, insurance and paperwork: not free, and not small.',
        ],
      },
    ],
  },
  {
    id: 'city-sky',
    slug: 'reading-the-sky-from-a-city',
    title: 'Reading the sky from a city',
    category: 'stargazing',
    date: '2026-07-15',
    readingTime: 1,
    excerpt: 'Light pollution takes the faint things but leaves the bright ones.',
    image: '/img/city-sky.jpg',
    credit: 'NASA',
    gist: {
      text: 'A city sky is not empty. It is reduced to the brightest two hundred objects, which is still enough to learn the sky on.',
      terms: [
        {
          term: 'Light pollution',
          definition: 'Sky glow from street lighting washing out faint objects.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'From a city you can still see the Moon, the bright planets, the brightest stars and the space station. What you lose is the Milky Way and everything faint enough to need dark adaptation.',
      },
      {
        type: 'p',
        text: 'Find a spot facing away from the nearest streetlamp and give your eyes fifteen minutes. The difference between the first minute and the fifteenth is bigger than most equipment upgrades.',
      },
      {
        type: 'list',
        items: [
          'Face away from the nearest light source, not towards the darkest sky.',
          'Turn your phone to its dimmest setting, or leave it in your pocket.',
          'Learn one constellation properly instead of hunting for everything.',
        ],
      },
    ],
  },
  {
    id: 'ion-engines',
    slug: 'ion-engines-slow-patient-relentless',
    title: 'Ion engines: slow, patient, relentless',
    category: 'space-technology',
    date: '2026-07-14',
    readingTime: 1,
    excerpt: 'An ion engine produces about as much thrust as a sheet of paper resting on your hand.',
    image: '/img/ion-engines.jpg',
    credit: 'NASA/JPL-Caltech',
    pathId: 'reading-the-universe',
    step: 3,
    gist: {
      text: 'Almost no thrust, almost infinite patience. Run an ion engine for a year and it beats a chemical rocket on distance.',
      terms: [
        {
          term: 'Specific impulse',
          definition:
            'How much speed you get per kilogram of propellant. Ion engines win this by a mile.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'It accelerates ions to tens of kilometres per second, far faster than any chemical rocket, using a few grams of propellant a day. The catch is the thrust: a fraction of a newton.',
      },
      {
        type: 'p',
        text: 'Run it for a year and the numbers stop being absurd. That is how a spacecraft reaches an asteroid, circles it, and still has fuel left to leave.',
      },
      {
        type: 'list',
        items: [
          'Chemical engines: huge thrust, minutes of it.',
          'Ion engines: tiny thrust, thousands of hours of it.',
          'The crossover happens somewhere around a month of continuous firing.',
        ],
      },
    ],
  },
  {
    id: 'uranus',
    slug: 'the-planet-that-rolls',
    title: 'The planet that rolls: Uranus',
    category: 'our-solar-system',
    date: '2026-07-12',
    readingTime: 1,
    excerpt: 'Uranus orbits on its side, which breaks almost every assumption about how planets work.',
    image: '/img/uranus.jpg',
    credit: 'NASA/JPL-Caltech',
    pathId: 'our-solar-system',
    step: 3,
    gist: {
      text: 'Uranus is tipped over by ninety-eight degrees, so its poles take turns facing the Sun for twenty-one years at a time.',
      terms: [
        {
          term: 'Obliquity',
          definition: 'The tilt of a planet’s axis relative to its orbit.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'Its axis is tilted about ninety-eight degrees, so the poles take turns facing the Sun and each season lasts twenty-one years. Someone standing at the pole would watch the Sun circle the horizon rather than rise and set.',
      },
      {
        type: 'p',
        text: 'The leading explanation is a collision early on with something the size of Earth, which knocked the planet over and left its magnetic field similarly skewed.',
      },
      {
        type: 'quote',
        text: 'A day at the pole lasts forty-two years: twenty-one of light, twenty-one of dark.',
      },
    ],
  },
  {
    id: 'andromeda',
    slug: 'how-to-find-the-andromeda-galaxy',
    title: 'How to find the Andromeda galaxy',
    category: 'stargazing',
    date: '2026-07-08',
    readingTime: 1,
    excerpt: 'The furthest thing you can see without a telescope is two and a half million years away.',
    image: '/img/andromeda.jpg',
    credit: 'NASA',
    gist: {
      text: 'The faintest thing most people will ever see with their own eyes is a galaxy, and it looks like a smudge that will not focus.',
      terms: [
        {
          term: 'Averted vision',
          definition:
            'Looking slightly to one side, which lets faint objects land on a more sensitive part of your eye.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'Andromeda is visible from a dark sky as a faint oval, and it is the only galaxy most people will ever see with their own eyes. The light reaching you left before humans existed as a species.',
      },
      {
        type: 'p',
        text: 'Find it by following the line out from the corner of the Great Square of Pegasus. If you can see it at all it will look like a smudge that refuses to sharpen when you focus.',
      },
      {
        type: 'list',
        items: [
          'Find the Great Square of Pegasus first.',
          'Follow the two outer stars away from the square.',
          'Look slightly to the side of it — it will appear before it does when you stare.',
        ],
      },
    ],
  },
  {
    id: 'voyager',
    slug: 'voyager-is-still-talking',
    title: 'Voyager is still talking',
    category: 'space-history',
    date: '2026-07-06',
    readingTime: 1,
    excerpt: 'Two spacecraft launched in 1977 are still transmitting, on power that halves every decade.',
    image: '/img/voyager.jpg',
    credit: 'NASA/JPL-Caltech',
    gist: {
      text: 'Both Voyagers were built for four years and are still transmitting from interstellar space, on a reactor that loses half its power every decade.',
      terms: [
        {
          term: 'Radioisotope generator',
          definition:
            'A power source that turns the heat of decaying plutonium into electricity.',
        },
        {
          term: 'Interstellar space',
          definition: 'The region beyond the bubble of particles the Sun blows out.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'Voyager 1 and 2 were built for a four-year mission to Jupiter and Saturn. They are now in interstellar space, still sending back data, at a signal strength measured in attoseconds of a watt.',
      },
      {
        type: 'p',
        text: 'Both carry a gold-plated record with ninety minutes of music, greetings in fifty-five languages and a diagram explaining where the spacecraft came from.',
      },
      { type: 'h2', text: 'Where they are now' },
      {
        type: 'p',
        text: 'Voyager 1 is about twenty-four billion kilometres away. Its radio signal takes nearly a day to reach us, and the antenna that receives it is seventy metres across.',
      },
      {
        type: 'quote',
        text: 'The instruments are being switched off one at a time, not because they fail, but because the plutonium is running down.',
      },
      {
        type: 'list',
        items: [
          '1977: both launch, weeks apart.',
          '1989: Neptune, and the planetary mission is over.',
          '2012 and 2018: each crosses into interstellar space.',
          '2030: the last instrument goes quiet.',
        ],
      },
      {
        type: 'figure',
        src: '/img/figures/voyager-1.jpg',
        caption: 'The golden record, mounted on Voyager. It carries sounds, music and a map.',
        credit: 'NASA/JPL-Caltech',
      },
      {
        type: 'figure',
        src: '/img/figures/voyager-2.jpg',
        caption: 'The dish that still hears them, seventy metres across.',
        credit: 'NASA/JPL-Caltech',
      },
    ],
  },
  {
    id: 'mars-water',
    slug: 'why-mars-lost-its-water',
    title: 'Why Mars lost its water',
    category: 'our-solar-system',
    date: '2026-07-05',
    readingTime: 1,
    excerpt: 'Mars had rivers. Then it had a magnetic field problem.',
    image: '/img/mars-water.jpg',
    credit: 'NASA/JPL-Caltech',
    pathId: 'our-solar-system',
    step: 4,
    gist: {
      text: 'The channels are still there. What removed the water was the loss of the magnetic field, and everything that followed from it.',
      terms: [
        {
          term: 'Solar wind',
          definition: 'The stream of charged particles constantly leaving the Sun.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'The channels are still there: dried riverbeds, deltas, and minerals that only form in water. Early Mars was wet enough to erode a landscape, and then it stopped.',
      },
      {
        type: 'p',
        text: 'The likely cause is the loss of the magnetic field. Without it the atmosphere was stripped by the solar wind, pressure dropped, and liquid water on the surface stopped being stable.',
      },
      {
        type: 'list',
        items: [
          'Rivers, deltas and lake beds: all confirmed on the surface.',
          'The atmosphere today is under one percent of Earth’s pressure.',
          'Most of the water that remains is frozen, or locked into minerals.',
        ],
      },
    ],
  },
  {
    id: 'rover-driving',
    slug: 'how-a-rover-drives-itself',
    title: 'How a rover drives itself',
    category: 'space-technology',
    date: '2026-07-02',
    readingTime: 1,
    excerpt: 'A rover drives itself, slowly, because nobody can steer it in real time.',
    image: '/img/rover-driving.jpg',
    credit: 'NASA/JPL-Caltech',
    pathId: 'reading-the-universe',
    step: 4,
    gist: {
      text: 'The round trip to Mars is twenty minutes. That delay is why every rover drives itself, and why it drives so carefully.',
      terms: [
        {
          term: 'Autonomy',
          definition: 'The rover deciding its own route rather than waiting for instructions.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'The round trip to Mars is between five and twenty minutes, so teleoperation is out. Each rover plans its own route across the terrain it can see, then stops and waits for approval on the parts it cannot.',
      },
      {
        type: 'p',
        text: 'The result is a vehicle that covers about a hundred metres a day and never exceeds a fast walking pace. Not because the motors are weak, but because an unrecoverable mistake costs the whole mission.',
      },
      {
        type: 'list',
        items: [
          'Hazard cameras map the ground a few metres ahead.',
          'The planner scores routes for slope, rock size and slip risk.',
          'Anything uncertain is sent back for a human to approve.',
        ],
      },
    ],
  },
  {
    id: 'almost-mission',
    slug: 'the-mission-that-almost-wasnt',
    title: 'The mission that almost was not',
    category: 'space-history',
    date: '2026-07-01',
    readingTime: 1,
    excerpt: 'Funding was cut twice, the window was missed, and it flew anyway.',
    image: '/img/almost-mission.jpg',
    credit: 'NASA',
    gist: {
      text: 'The spacecraft spent a year in a clean room while the team argued about whether the science was worth the cost.',
      terms: [
        {
          term: 'Launch window',
          definition: 'The period when the planets line up well enough to make the trip.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'The spacecraft sat in a clean room for a year while the team argued about whether the science was worth the cost. By the time the money came back the launch window had gone, and the mission slipped again.',
      },
      {
        type: 'p',
        text: 'It launched late and over budget, and returned more than anyone had promised. Most of what we know about that corner of the solar system comes from it.',
      },
      {
        type: 'quote',
        text: 'Nobody remembers whether a mission was late. They remember what it found.',
      },
    ],
  },
  {
    id: 'laika',
    slug: 'laika-and-what-we-owe-her',
    title: 'Laika, and what we owe her',
    category: 'space-history',
    date: '2026-06-26',
    readingTime: 1,
    excerpt: 'The first animal to orbit Earth was never expected to come back.',
    image: '/img/laika.jpg',
    credit: 'NASA',
    gist: {
      text: 'Laika flew four weeks after the first satellite, on a schedule set by a political date rather than by engineering.',
      terms: [
        {
          term: 'Sputnik 2',
          definition:
            'The second satellite ever launched, and the first to carry a living passenger.',
        },
      ],
    },
    body: [
      {
        type: 'p',
        text: 'Laika was a stray from Moscow, chosen because strays tolerate cold and hunger. She flew in November 1957, four weeks after the first satellite.',
      },
      {
        type: 'p',
        text: 'The capsule had no way to come back. She died within hours from overheating, which was not made public for forty-five years.',
      },
      {
        type: 'list',
        items: [
          '1957: launched with one passenger and no return plan.',
          '2002: the cause of death is finally published.',
          'Today: a memorial in Moscow, and her name on a Mars rover’s landing site.',
        ],
      },
    ],
  },
]
