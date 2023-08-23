import SpotifyWebApi from "spotify-web-api-node";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";
import { useRecoilState } from "recoil";
import { playingTrackState } from "@/atoms/playerAtom";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Player from "./Player";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

function Dashboard() {
  const [playingTrack, setplayingTrack] = useRecoilState(playingTrackState);
  const [showplayer, setshowplayer] = useState(false);
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  useEffect(() => {
    setshowplayer(true);
  }, []);
  const chooseTrack = (track) => {
    setplayingTrack(track);
  };
  return (
    <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
      <Sidebar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Player accessToken={accessToken} trackUri={playingTrack.uri} />
      </div>
    </main>
  );
}

export default Dashboard;
