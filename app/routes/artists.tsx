import * as React from 'react';
import { useEffect, useState } from 'react';
import { ActionFunction, LoaderFunction, Outlet, redirect, useActionData, useCatch, useLoaderData, useNavigate } from 'remix';
import { Artist } from '~/interfaces';

type LoaderData = { artists: Array<Artist>, artistParam?: string };

export let loader: LoaderFunction = async ({ params }) => {
  let url = 'http://localhost:8788/'
  if (process.env.NODE_ENV === "production")
    url = 'https://mct-flare.pages.dev/'
    
  const res = await fetch(url + 'api/artists');
  const artists = await res.json() as Array<Artist>;
  const data: LoaderData = {
      artists
  }
  return data;
}

const ArtistTags: React.FC = () => {
  const data = useLoaderData<LoaderData>();
  const [selected, setSelected] = useState(-1)
  const [chosenArtist, setChosenArtist] = useState(data.artistParam)

  let navigate = useNavigate();

  function handleSelection(artistName: string) {
    setChosenArtist(artistName)
    const chosenUrl : string = "/artists/" + artistName
    navigate(chosenUrl)
}

  function getArtistTagsLabel() {
    const labels = data.artists.map((a, index) => {
      return (
        <div 
          onClick={(e) => handleSelection(a.name)} key={a.name}>
          {a.name} - {a.count}
        </div>
      )
    })
    return labels
  }

  return (
    <div>
      {data ?
        getArtistTagsLabel() : <h3>Loading Artists...</h3>}
      <Outlet />
    </div>

  );
}

export function CatchBoundary() {
  let caught = useCatch();

  if (caught.status === 404) {
    return (
      <div className="error-container">
        <p>There are no jokes to display.</p>
      </div>
    );
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return <div className="error-container">I did a whoopsies.</div>;
}

export const unstable_shouldReload = () => false;

export default ArtistTags;
