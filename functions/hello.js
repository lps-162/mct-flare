// export async function onRequestGet(request) {
//     return new Response(`Hello world`);
//   }

export async function onRequestGet(request) {

  const res = await fetch(
    `https://rickandmortyapi.com/api/character`
  );
  const data = await res.json();
  const info = JSON.stringify(data);
  return new Response(info, null, 2);
}