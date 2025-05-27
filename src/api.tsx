/**
 * Интерфейс артиста из Last.fm API.
 */
export interface Artist {
  name: string;
  listeners: string;
  url: string;
  image: Array<{ '#text': string; size: string }>;
}

/**
 * Интерфейс трека из Last.fm API.
 */
export interface Track {
  name: string;
  url: string;
  playcount?: string;
  listeners?: string;
  artist: { name: string } | string;
  image: Array<{ '#text': string; size: string }>;
}

/**
 * Результат поиска: массив артистов и массив треков.
 */
export interface SearchResult {
  artists: Artist[];
  tracks: Track[];
}

const API_KEY = '6e8bd150900c59bef07650a1e1d294f6';
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

/**
 * Получает список топ-исполнителей.
 * @returns Promise с массивом Artist
 */
export async function fetchTopArtists(): Promise<Artist[]> {
  const res = await fetch(`${BASE_URL}?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=9`);
  const data = await res.json();
  return data.artists.artist as Artist[];
}

/**
 * Получает список топ-треков.
 * @returns Promise с массивом Track
 */
export async function fetchTopTracks(): Promise<Track[]> {
  const res = await fetch(`${BASE_URL}?method=chart.gettoptracks&api_key=${API_KEY}&format=json&limit=9`);
  const data = await res.json();
  return data.tracks.track as Track[];
}

/**
 * Выполняет поиск артистов и треков по заданной строке.
 * @param query Строка поиска
 * @returns Promise с результатом поиска (SearchResult)
 */
export async function search(query: string): Promise<SearchResult> {
  const [trackRes, artistRes] = await Promise.all([
    fetch(`${BASE_URL}?method=track.search&track=${encodeURIComponent(query)}&api_key=${API_KEY}&format=json&limit=9`).then(r => r.json()),
    fetch(`${BASE_URL}?method=artist.search&artist=${encodeURIComponent(query)}&api_key=${API_KEY}&format=json&limit=9`).then(r => r.json()),
  ]);

  return {
    tracks: (trackRes.results.trackmatches.track as Track[]) || [],
    artists: (artistRes.results.artistmatches.artist as Artist[]) || []
  };
}