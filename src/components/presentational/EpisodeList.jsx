import { Collapse } from "./Collapse";
import { CharacterList } from "./CharacterList";
import { useEpisodes } from "../hooks/useEpisodes";

export const EpisodeList = () => {
  const { episodes } = useEpisodes();
  return (
    <div className="container episodes-container"> Episodes
      {episodes.map((episode) => (
        <Collapse
          key={episode.id}
          className="list"
          title={`${episode.episode} : ${episode.name}`}
          content={
            <CharacterList
              ids={episode.characters.map((character) => {
                const id = character.split("/").pop();
                return id;
              })}
            />
          }
        />
      ))}
    </div>
  );
};
