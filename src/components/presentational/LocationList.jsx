import { useLocations } from "../hooks/useLocations";
import { CharacterList } from "./CharacterList";
import { Collapse } from "./Collapse";

export const LocationList = () => {
  const {locations} = useLocations();
  return (
    <div className="container locations-container"> Location
      {locations.map((location) => (
        <Collapse
          className="list list-location"
          key={location.id}
          title={location.name}
          content={
            <CharacterList
              ids={location.residents.map((resident) => {
                const id = resident.split("/").pop();
                return id;
              })}
            />
          }
        />
      ))}
    </div>
  );
};
