import { Cell } from "../Cell";
import logo from "../../assets/black-king.png";
import { Colors } from "../Colors";
export enum FigureNames {
  FIGURE = "Фигура",
  KING = "Король",
  KNIGHT = "Конь",
  PAWN = "Пешка",
  QUEEN = "Ферзь",
  ROOK = "Ладья",
  BISHOP = "Слон",
}

export class Figure {
  colors: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;
  constructor(color: Colors, cell: Cell) {
    this.colors = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.id = Math.random();
    this.name = FigureNames.FIGURE;
  }
  canMove(target: Cell): boolean {
    return true;
  }
  movieFigure(target: Cell) {}
}
