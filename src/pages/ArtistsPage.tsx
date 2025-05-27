import React, { useEffect, useState } from 'react';
import { Artist, fetchTopArtists } from '../api';
import Card from '../components/Card';
import Grid from '../components/Grid';

/**
 * Страница с отображением топ-исполнителей.
 */
const ArtistsPage: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTopArtists()
      .then(setArtists)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>Топ исполнители</h2>
      {loading
        ? <p>Загрузка...</p>
        : (
          <Grid>
            {artists.map(artist => (
              <Card
                key={artist.name}
                title={artist.name}
                subtitle={`Слушателей: ${artist.listeners}`}
                img={artist.image?.[2]['#text']}
                url={artist.url}
              />
            ))}
          </Grid>
        )
      }
    </section>
  );
};

export default ArtistsPage;