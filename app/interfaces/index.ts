export interface Movie {
    id: number;
    name: string;
    url: string;
    artist: string;
    director: string;
    musicBy: string;
    releaseStatus: string;
    albumStatus: string;
    songs: Song[]
  }
  
  export interface Artist {
    id: number;
    name: string;
    count: number;
  }
  
  export interface Song {
    id: number,
    title: string,
    singers: string,
    duration: string,
    status: string
  }

  export interface Video {
    id: {
      videoId: number
    },
    snippet: {
      title: string,
      description: string,
      thumbnails: {
        default: {
          url: string
        }
        
      }
    }
  }