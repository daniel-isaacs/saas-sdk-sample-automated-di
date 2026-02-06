import { GraphClient } from '@optimizely/cms-sdk';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const client = new GraphClient(process.env.OPTIMIZELY_GRAPH_SINGLE_KEY!, {
    graphUrl: process.env.OPTIMIZELY_GRAPH_GATEWAY,
  });
  const path = slug === undefined? '/' : `/${slug.join('/')}/`;
  const content = await client.getContentByPath(path);

  if (content.length === 0) {
    notFound();
  }

  return <pre>{JSON.stringify(content, null, 2)}</pre>;
}