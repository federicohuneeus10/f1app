import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { HeroContainer } from "./DriversHero.styles";

/**
 * Props for `DriversHero`.
 */
export type DriversHeroProps = SliceComponentProps<Content.DriversHeroSlice>;

/**
 * Component for "DriversHero" Slices.
 */
const DriversHero: FC<DriversHeroProps> = ({ slice }) => {
  return (
    <HeroContainer>
      <div className="container">
        <div className="profile">
          <div className="col">
            <h1>
              {slice.primary.driver_info[0].name}{" "}
              {slice.primary.driver_info[0].surname}
            </h1>
            <Image
              src={slice.primary.driver_info[0].image.url}
              alt={slice.primary.driver_info[0].image.alt}
              width={200}
              height={200}
            />
          </div>
          <div className="col info">
            <p className="lg">Nationality</p>
            <p className="light-white">
              {slice.primary.driver_info[0].nationality}
            </p>
          </div>
        </div>
        <div className="row-of-imgs">
          {[1, 2, 3].map((i, index) => {
            return (
              <Image
                src={slice.primary.driver_info[0][`highlight_image_${i}`].url}
                key={index}
                width={260}
                height={200}
                alt={slice.primary.driver_info[0][`highlight_image_${i}`].alt}
              />
            );
          })}
        </div>
      </div>
    </HeroContainer>
  );
};

export default DriversHero;
