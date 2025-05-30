import React, { useEffect, useState } from 'react';
import { Artist, Track, fetchTopArtists, fetchTopTracks } from '../api';
import Section from '../components/Section';
import CardGrid from '../components/CardGrid';
import CardCrc from '../components/CardCrc';
import TrackGrid from '../components/TrackGrid';
import TrackItem from '../components/TrackItem';

/**
 * Страница «Топ исполнителей и топ треков».
 */
const TopPage: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [tracks, setTracks]   = useState<Track[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchTopArtists(), fetchTopTracks()])
      .then(([a, t]) => {
        setArtists(a);
        setTracks(t);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Section title="Популярно прямо сейчас">
        {loading ? (
          <p>Загрузка…</p>
        ) : (
          <CardGrid<import('../api').Artist>
              data={artists}
              className='card-grid-hot'
              renderItem={artist => (
                <CardCrc
                  title={artist.name}
                  subtitle={`Слушателей: ${artist.listeners}`}
                  img={artist.image?.[3]['#text']}
                  url={artist.url}
                />
              )}
            />
        )}
      </Section>

      <Section title="Популярные треки">
        {loading ? (
          <p>Загрузка…</p>
        ) : (
          <TrackGrid<import('../api').Track>
              data={tracks}
              renderItem={track => (
                <TrackItem
                  key={track.url}
                  name={track.name}
                  artist={typeof track.artist === 'string' ? track.artist : track.artist.name}
                  url={track.url}
                  img={track.image?.[3]['#text']}
                />
              )}
            />
        )}
      </Section>
    </>
  );
};

export default TopPage;
