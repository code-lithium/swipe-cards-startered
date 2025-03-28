export type ItemType = {
    id: number;
    title: string;
    poem: string;
    y: number;
    reaction: null | boolean;
    color: string;
  };
  
  export const initItems: ItemType[] = [
    {
      id: 1,
      title: "Morning Glow",
      poem: "Golden light on dewdrop’s crest, Whispers wake the world to rest.Softest hush, the earth exhales, Daylight paints the hills and trails.",
      reaction: null,
      y: 0,
      color: "#1E90FF",
    },
    {
      id: 2,
      title: "Silent Love",
      poem: "Eyes that speak, no words are said, Softest touch, a heart is led. Time stands still, yet moves so fast, Love’s a spark that’s built to last.",
      reaction: null,
      y: -20,
      color: "#4B0082",
     
    },
    {
      id: 3,
      title: "Echoes of Time",
      poem: "Footsteps fade where dreams once grew, Echoes whisper all we knew. Memories dance in fleeting streams, Time moves on, but leaves its beams.",
      reaction: null,
      y: -40,
      color: "#228B22",
    },
    {
      id: 4,
      title: "City Pulse",
      poem: "Neon hum and hurried feet, Rhythms pulse in crowded streets. Lost in motion, hearts ignite, City glows in endless night.",
      reaction: null,
      y: -60,
      color: "#DC143C",
    },
    {
      id: 5,
      title: "A Feather Falls",
      poem: "Drifting soft, the feather knows, Where it lands, the cold wind blows. Silent journeys, paths unseen, Loss is light yet felt so keen.",
      reaction: null,
      y: -80,
      color: "#FFD700",
    },
    {
      id: 6,
      title: "Beneath the Moon",
      poem: "Silver shadows paint the ground, Secrets hum without a sound. In the dark, the echoes call, Moonlight knows but tells not all.",
      reaction: null,
      y: -50,
      color: "#FF6F61",
    },
    {
      id: 7,
      title: "The Poet’s Mind",
      poem: "Ink on paper, thought takes flight, Words ignite the silent night. Dreams take shape in whispered lines, Poets weave the grand designs.",
      reaction: null,
      y: -60,
      color: "#008080",
    },
    {
      id: 8,
      title: "Child’s Laughter",
      poem: "Bubbles burst and laughter flies, Wonder glows in bright blue eyes. Tiny hands reach toward the sun, Life’s a song when days are young.",
      reaction: null,
      y: -70,
      color: "#FF4500",
    },
    {
      id: 9,
      title: "Unfinished Roads",
      poem: "Winding paths, the journey calls, Mountains rise and twilight falls. Steps unknown but hearts still roam, Every road can lead to home.",
      reaction: null,
      y: -80,
      color: "#483D8B",
    },
    {
      id: 10,
      title: "Stillness Speaks",
      poem: "Breathe in deep, the world is still, Softest breeze upon the hill. Nothing moves, yet all is whole, Peace resides within the soul.",
      reaction: null,
      y: -90,
      color: "#32CD32",
    },
  ]
    .slice()
    .reverse();