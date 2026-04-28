export type MusicPlatform = "kugou" | "netease" | "tencent";

export interface MusicPlaylist {
  id: string;
  name: string;
  cover: string;
  description: string;
  platform: MusicPlatform;
  mood: string;
  accent: string;
}

export const musicPlaylistsZh: MusicPlaylist[] = [
  {
    id: "9098164421",
    name: "私人雷达",
    cover: "https://picsum.photos/seed/wz-music-radar/1200/1200",
    description: "从熟悉旋律里继续向外探索。",
    platform: "netease",
    mood: "发现",
    accent: "coral",
  },
  {
    id: "888888",
    name: "氛围电子",
    cover: "https://picsum.photos/seed/wz-music-night/1200/1200",
    description: "适合夜晚、赶路与独处时刻。",
    platform: "netease",
    mood: "夜行",
    accent: "violet",
  },
  {
    id: "222222",
    name: "深夜钢琴",
    cover: "https://picsum.photos/seed/wz-music-piano/1200/1200",
    description: "低照度、低语感、适合静下来。",
    platform: "tencent",
    mood: "钢琴",
    accent: "cyan",
  },
  {
    id: "3136952023",
    name: "城市雨幕",
    cover: "https://picsum.photos/seed/wz-music-rain/1200/1200",
    description: "带一点潮湿感的都市合成器。",
    platform: "kugou",
    mood: "雨夜",
    accent: "blue",
  },
  {
    id: "684380807",
    name: "晨间轻拍",
    cover: "https://picsum.photos/seed/wz-music-morning/1200/1200",
    description: "适合阅读、整理、慢慢进入状态。",
    platform: "kugou",
    mood: "晨光",
    accent: "teal",
  },
  {
    id: "9209322008",
    name: "剧场余温",
    cover: "https://picsum.photos/seed/wz-music-stage/1200/1200",
    description: "偏叙事感和情绪张力的曲目集合。",
    platform: "netease",
    mood: "叙事",
    accent: "pink",
  },
];

export const musicPlaylistsEn: MusicPlaylist[] = [
  {
    id: "9098164421",
    name: "Private Radar",
    cover: "https://picsum.photos/seed/wz-music-radar/1200/1200",
    description: "A gateway from familiar tracks into new territory.",
    platform: "netease",
    mood: "Discovery",
    accent: "coral",
  },
  {
    id: "888888",
    name: "Atmospheric Electronica",
    cover: "https://picsum.photos/seed/wz-music-night/1200/1200",
    description: "For late hours, motion, and solitary momentum.",
    platform: "netease",
    mood: "Night Drive",
    accent: "violet",
  },
  {
    id: "222222",
    name: "Midnight Piano",
    cover: "https://picsum.photos/seed/wz-music-piano/1200/1200",
    description: "Low-light, low-volume, deeply focused listening.",
    platform: "tencent",
    mood: "Piano",
    accent: "cyan",
  },
  {
    id: "3136952023",
    name: "City Rain",
    cover: "https://picsum.photos/seed/wz-music-rain/1200/1200",
    description: "Urban synth textures with a wet-night pulse.",
    platform: "kugou",
    mood: "Rain",
    accent: "blue",
  },
  {
    id: "684380807",
    name: "Morning Light",
    cover: "https://picsum.photos/seed/wz-music-morning/1200/1200",
    description: "A soft entry into reading, sorting, and focus.",
    platform: "kugou",
    mood: "Morning",
    accent: "teal",
  },
  {
    id: "9209322008",
    name: "Stage Glow",
    cover: "https://picsum.photos/seed/wz-music-stage/1200/1200",
    description: "Narrative-heavy songs with emotional lift.",
    platform: "netease",
    mood: "Theatrical",
    accent: "pink",
  },
];

export const platformAccentMap: Record<MusicPlatform, string> = {
  kugou: "blue",
  netease: "coral",
  tencent: "cyan",
};
