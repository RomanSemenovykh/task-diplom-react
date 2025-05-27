import React, { useEffect, useState } from 'react';
import { Track, fetchTopTracks } from '../api';
import Card from '../components/Card';
import Grid from '../components/Grid';

/**
 * Страница с отображением топ-треков.
 */
const TracksPage: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTopTracks()
      .then(setTracks)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>Топ треки</h2>
      {loading
        ? <p>Загрузка...</p>
        : (
          <Grid>
            {tracks.map(track => (
              <Card
                key={track.url}
                title={track.name}
                subtitle={typeof track.artist === 'string' ? track.artist : track.artist.name}
                img={track.image?.[2]['#text']}
                url={track.url}
              />
            ))}
          </Grid>
        )
      }
    </section>
  );
};

export default TracksPage;