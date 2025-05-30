import React, { useState, FormEvent } from 'react';
import { IArtist, ITrack, ISearchResult, search } from '../api';
import Section from '../components/Section';
import CardGrid from '../components/CardGrid';
import CardSqr from '../components/CardSqr';
import CardList from '../components/CardList';
import CardRow from '../components/CardRow';
import TrackRow from '../components/TrackRow';
import TagGrid from '../components/TagGrid';

type Tab = 'all' | 'artists' | 'tracks';

/**
 * Страница поиска с тремя табами: Все, Исполнители и Треки.
 */
const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<ISearchResult>({ artists: [], tracks: [] });
  const [loading, setLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [tab, setTab] = useState<Tab>('all');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const res = await search(query);
    setResults(res);
    setHasSearched(true);
    setLoading(false);
    setTab('all');
  };

  return (
    <>
      {/* Форма поиска */}
      <Section title="Поиск">
        <form onSubmit={onSubmit} className="search-form">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Введите исполнителя или трек"
          />
          <button type="submit">&#128269;</button>
        </form>
        {loading && <p>Загрузка…</p>}
      </Section>

      {!hasSearched && !loading && (
        <TagGrid />
      )}
      {/* Результаты */}
      {hasSearched && !loading && (
        <Section title="Результаты поиска">
          {/* Табы */}
          <div className="tabs">
            <button
              className={tab === 'all' ? 'tab active' : 'tab'}
              onClick={() => setTab('all')}
            >
              Все
            </button>
            <button
              className={tab === 'artists' ? 'tab active' : 'tab'}
              onClick={() => setTab('artists')}
            >
              Исполнители
            </button>
            <button
              className={tab === 'tracks' ? 'tab active' : 'tab'}
              onClick={() => setTab('tracks')}
            >
              Треки
            </button>
          </div>

          {/* Контент табов */}
          {tab === 'all' && (
            <>
              <Section title="Исполнители">
                {results.artists.length > 0 ? (
                  <CardGrid<IArtist>
                    data={results.artists}
                    className="grid-dense"
                    renderItem={artist => (
                      <CardSqr
                        key={artist.name}
                        title={artist.name}
                        subtitle={`Слушателей: ${artist.listeners}`}
                        img={artist.image?.[3]['#text']}
                        url={artist.url}
                      />
                    )}
                  />
                ) : (
                  <p>Артисты не найдены.</p>
                )}
              </Section>

              <Section title="Треки">
                {results.tracks.length > 0 ? (
                  <CardList<ITrack>
                    data={results.tracks}
                    renderItem={track => (
                      <TrackRow
                        key={track.url}
                        name={track.name}
                        artist={
                          typeof track.artist === 'string'
                            ? track.artist
                            : track.artist.name
                        }
                        url={track.url}
                      />
                    )}
                  />
                ) : (
                  <p>Треки не найдены.</p>
                )}
              </Section>
            </>
          )}

          {tab === 'artists' && (
            <Section title="Исполнители">
              {results.artists.length > 0 ? (
                <CardGrid<IArtist>
                  data={results.artists}
                  className='card-row-grid'
                  renderItem={artist => (
                    <CardRow
                      title={artist.name}
                      subtitle={`Слушателей: ${artist.listeners}`}
                      img={artist.image?.[3]['#text']}
                      url={artist.url}
                    />
                  )}
                />
              ) : (
                <p>Артисты не найдены.</p>
              )}
            </Section>
          )}

          {tab === 'tracks' && (
            <Section title="Треки">
              {results.tracks.length > 0 ? (
                <CardGrid<ITrack>
                  data={results.tracks}
                  className='card-row-grid'
                  renderItem={track => (
                    <CardRow
                      title={track.name}
                      subtitle={`Слушателей: ${track.listeners}`}
                      img={track.image?.[3]['#text']}
                      url={track.url}
                    />
                  )}
                />
              ) : (
                <p>Треки не найдены.</p>
              )}
            </Section>
          )}
        </Section>
      )}
    </>
  );
};

export default SearchPage;