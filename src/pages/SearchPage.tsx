import React, { useState, FormEvent } from 'react';
import { SearchResult, search } from '../api';
import Card from '../components/Card';
import Grid from '../components/Grid';

/**
 * Страница поиска: форма, индикатор загрузки и результаты.
 */
const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult>({ artists: [], tracks: [] });
  const [loading, setLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState(false);

  /**
   * Обработчик сабмита формы поиска.
   * @param e Событие отправки формы
   */
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await search(query);
      setResults(res);
      setHasSearched(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2>Поиск</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Введите исполнителя или трек"
        />
        <button type="submit">Поиск</button>
      </form>

      {loading && <p>Загрузка...</p>}

      {hasSearched && !loading && (
        <>
          <h3>Исполнители</h3>
          <Grid>
            {results.artists.map(artist => (
              <Card
                key={artist.name}
                title={artist.name}
                img={artist.image?.[2]['#text']}
                url={artist.url}
              />
            ))}
          </Grid>

          <h3>Треки</h3>
          <Grid>
            {results.tracks.map(track => (
              <Card
                key={track.url}
                title={track.name}
                subtitle={
                  typeof track.artist === 'string'
                    ? track.artist
                    : track.artist.name
                }
                img={track.image?.[2]['#text']}
                url={track.url}
              />
            ))}
          </Grid>
        </>
      )}
    </section>
  );
};

export default SearchPage;