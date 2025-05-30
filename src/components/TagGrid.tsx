import React, { useEffect, useState } from 'react';
import { Tag, fetchTopTags, fetchTagDetails, Artist } from '../api';
import Section from './Section';
import BigTagCard from './BigTagCard';
import SmallTagCard from './SmallTagCard';

const TagGrid: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [mainTags, setMainTags] = useState<(Tag & { topArtists: Artist[]; wikiText: string })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const topTags = await fetchTopTags(20);
      setTags(topTags);

      // детали первого и последнего
      const first = topTags[0];
      const last = topTags[topTags.length - 1];
      const details = await Promise.all([
        fetchTagDetails(first.name),
        fetchTagDetails(last.name),
      ]);

      setMainTags(details.map(d => ({ ...d, wikiText: d.wiki?.summary || '' })));
      setLoading(false);
    })();
  }, []);

  if (loading) return <Section title="Популярные жанры"><p>Загрузка…</p></Section>;

  const [big1, big2] = mainTags;
  const smalls = tags.filter(t => t.name !== big1.name && t.name !== big2.name);

  return (
    <Section title="Популярные жанры">
      <div className="tag-grid">
        <BigTagCard
          title={big1.name}
          className="big-tag-card big-left"
          summary={big1.wikiText.split('. ')[0] + '.'}
          imageUrl={big1.topArtists[0]?.image?.[3]['#text'] || ''}
          url={big1.url}
          topArtists={big1.topArtists}
        />

        {smalls.slice(0, 18).map((tag, i) => (
          <SmallTagCard
            key={tag.name}
            name={tag.name}
            className={`small-tag-card slot-${i+1}`}
            imageUrl={`https://placehold.co/300x300?text=${encodeURIComponent(tag.name)}`}
            url={tag.url}
          />
        ))}

        <BigTagCard
          title={big2.name}
          className="big-tag-card big-right"
          summary={big2.wikiText.split('. ')[0] + '.'}
          imageUrl={big2.topArtists[0]?.image?.[3]['#text'] || ''}
          url={big2.url}
          topArtists={big2.topArtists}
        />
      </div>
    </Section>
  );
};

export default TagGrid;