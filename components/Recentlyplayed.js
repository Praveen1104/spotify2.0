import { playState, playingTrackState } from "@/atoms/playerAtom";
import { useRecoilState } from "recoil";

function Recentlyplayed({track,chooseTrack}) {
  const [play, setplay] = useRecoilState(playState);
  const [playingTrack, setplayingTrack] = useRecoilState(playingTrackState);
  const handleplay=()=>{
        chooseTrack(track)
        if(track.uri === playingTrack.uri){
            setplay(!play)
        }
  }
  return (
    <div className="flex items-center space-x-3" onClick={handleplay}>
      <img
        src={track.albumUrl}
        alt=""
        className="rounded-full w-[52px] h-[52px]"
      />
      <div>
        <h4 className="text-white text-[13px] mb-0.5 font-semibold hover:underline cursor-pointer truncate max-w-[150px]">
          {track.title}
        </h4>
        <p className="text-xs text-[#686868] font-semibold cursor-pointer hover:underline">
          {track.artist}
        </p>
      </div>
    </div>
  );
}

export default Recentlyplayed;
