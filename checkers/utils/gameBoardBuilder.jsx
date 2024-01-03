import ChessBoardTile from "@/components/ChessBoardTile";

const chessBoard = [];
const rows = 7;
const columns = 7;
let tileIndex = 0;
let css = "";

export function colorPicker(index, row) {
  if (row % 2 === 0) {
    if (index % 2 === 0) {
      css = "bg-gray-50 h-32 w-32";
    } else {
      css = "bg-gray-900 h-32 w-32";
    }
  } else {
    if (index % 2 === 0) {
      css = "bg-gray-900 h-32 w-32";
    } else {
      css = "bg-gray-50 h-32 w-32";
    }
  }
  return css;
}
export function gameBoardBuilder() {
  for (let rowIndex = 0; rowIndex <= rows; rowIndex++) {
    for (let columnsIndex = 0; columnsIndex <= columns; columnsIndex++) {
      let TileColor = colorPicker(tileIndex + 1, rowIndex);
      console.log(TileColor);
      chessBoard.push(
        <ChessBoardTile
          css={TileColor}
          key={tileIndex}
          rowindex={rowIndex}
          colindex={columnsIndex}
          index={tileIndex}
        ></ChessBoardTile>
      );
      tileIndex++;
    }
  }
  return chessBoard;
}
