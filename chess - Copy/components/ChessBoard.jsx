import { motion } from "framer-motion";
import ChessBoardTile from "./ChessBoardTile";
import { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// const chessBoard = gameBoardBuilder();
const rows = 7;
const columns = 7;
let tileIndex = 0;
let css = "";

function colorPicker(index, row) {
  if (row % 2 === 0) {
    if (index % 2 === 0) {
      css = "bg-black p-6 h-6 w-6 lg:h-28 lg:w-28 sm:h-12 sm:w-12";
    } else {
      css = "bg-white p-6 h-6 w-6 lg:h-28 lg:w-28 sm:h-12 sm:w-12";
    }
  } else {
    if (index % 2 === 0) {
      css = "bg-white p-6 h-6 w-6 lg:h-28 lg:w-28 sm:h-12 sm:w-12";
    } else {
      css = "bg-black p-6 h-6 w-6 lg:h-28 lg:w-28 sm:h-12 sm:w-12";
    }
  }
  return css;
}
// function gameBoardBuilder() {
// for (let rowIndex = 0; rowIndex <= rows; rowIndex++) {
//   for (let columnsIndex = 0; columnsIndex <= columns; columnsIndex++) {
//     let TileColor = colorPicker(tileIndex + 1, rowIndex);
//     console.log(TileColor);
//     chessBoard.push(
//       <Draggable
//         draggableId={`${tileIndex}`}
//         key={tileIndex}
//         index={tileIndex}
//       >
//         {(provided) => (
//           <div
//             {...provided.dragHandleProps}
//             {...provided.draggableProps}
//             ref={provided.innerRef}
//           >
//             <ChessBoardTile
//               css={TileColor}
//               key={tileIndex}
//               rowindex={rowIndex}
//               colindex={columnsIndex}
//               cords={`${rowIndex} ${columnsIndex}`}
//               index={tileIndex}
//             ></ChessBoardTile>
//           </div>
//         )}
//       </Draggable>
//     );

//     tileIndex++;
//   }
// }
// }
// gameBoardBuilder();

export default function ChessBoard() {
  const [chessBoardState, setChessBoardState] = useState("");
  useEffect(() => {
    const chessBoard = [];
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
            cords={`${rowIndex} ${columnsIndex}`}
            index={tileIndex}
          ></ChessBoardTile>
        );
        tileIndex++;
      }
    }

    setChessBoardState(chessBoard);
  }, []);

  return (
    <>
      <motion.div
        className="grid grid-cols-8 justify-items-stretch justify-self-center content-center gap-1 rounded border-4 bg-gray-400 border-gray-400"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0, x: [5, 0, 5, 0] }}
        exit={{ opacity: 0, y: -60 }}
      >
        {chessBoardState}
      </motion.div>
    </>
  );
}

// export function ChessBoardTile() {
//   return <div>hi</div>;
// }
