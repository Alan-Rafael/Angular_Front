import { Figure } from "./Figures";

export interface FiguresResponse {
  _embedded: {
    figures: Figure[];
  };
}
