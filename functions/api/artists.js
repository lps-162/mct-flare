// export async function onRequestGet(request) {
//     return new Response(`Hello world`);
//   }

export async function onRequestGet(request) {
    const artists = [
        {
            id: 1,
            name: "Kamal Hassan",
            count: 65
        },
        {
            id: 2,
            name: "Rajinikanth",
            count: 54
        },
        {
            id: 3,
            name: "Mohan",
            count: 34
        }
    ]
    const info = JSON.stringify(artists);
    return new Response(info, null, 2);
  }