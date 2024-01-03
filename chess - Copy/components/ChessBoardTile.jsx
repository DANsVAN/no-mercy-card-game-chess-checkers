import { motion } from "framer-motion";
import BlackBishops from "./chessPices/BlackBishops";
import BlackKing from "./chessPices/BlackKing";
import BlackKnights from "./chessPices/BlackKnights";
import BlackPawns from "./chessPices/BlackPawns";
import BlackRooks from "./chessPices/BlackRooks";
import BlackQueen from "./chessPices/BlackQueen";
import WhiteBishops from "./chessPices/WhiteBishops";
import WhiteKing from "./chessPices/WhiteKing";
import WhiteKnights from "./chessPices/WhiteKnights";
import WhitePawns from "./chessPices/WhitePawns";
import WhiteQueen from "./chessPices/WhiteQueen";
import WhiteRooks from "./chessPices/WhiteRooks";
import Empty from "./chessPices/Empty";
import { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
let availableSquares = "";
let chessPice = "";
let availableSquaresCords = [];

export default function ChessBoardTile({
  css,
  index,
  rowindex,
  colindex,
  cords,
}) {
  const [ChessPicesState, setChessPicesState] = useState(undefined);
  function HandleDragDrop(results) {
    const { source, destination, draggableId, mode, reason, combine, type } =
      results;
    // if (!destination) {
    //   return;
    // }

    // if (
    //   source.droppableId === destination.droppableId &&
    //   source.index === destination.index
    // ) {
    //   return;
    // }

    if (type === "allChessBoardTiles") {
      const reorderedChessPices = [...ChessPicesState];
    }
    console.log(source, destination, draggableId, mode, reason, combine, type);
    // if (piceType === "BlackKing") {
    //   availableSquaresCords = [
    //     `${rowindex - 1} ${colindex}`,
    //     `${rowindex - 1} ${colindex - 1}`,
    //     `${rowindex - 1} ${colindex + 1}`,
    //     `${rowindex + 1} ${colindex}`,
    //     `${rowindex + 1} ${colindex - 1}`,
    //     `${rowindex + 1} ${colindex + 1}`,
    //     `${rowindex} ${colindex + 1}`,
    //     `${rowindex} ${colindex - 1}`,
    //   ];
    //   console.log(chessPices[0].props.cords);
    //   console.log(availableSquaresCords);
    // }
  }

  useEffect(() => {
    let chessPices = [];

    if (index == 0 || index == 7) {
      chessPice = (
        <Draggable draggableId={`${index}`} key={index} index={index}>
          {(provided) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <WhiteRooks
                index={index}
                rowindex={rowindex}
                colindex={colindex}
                key={index}
                cords={cords}
                availableSquares={availableSquares}
                occupied={"WhiteRook"}
              ></WhiteRooks>
            </div>
          )}
        </Draggable>
      );
    } else if (index == 1 || index == 6) {
      chessPice = (
        <Draggable draggableId={`${index}`} key={index} index={index}>
          {(provided) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <WhiteKnights
                index={index}
                rowindex={rowindex}
                colindex={colindex}
                key={index}
                cords={cords}
                availableSquares={availableSquares}
                occupied={"WhiteKnight"}
              ></WhiteKnights>
            </div>
          )}
        </Draggable>
      );
    } else if (index == 2 || index == 5) {
      chessPice = (
        <Draggable draggableId={`${index}`} key={index} index={index}>
          {(provided) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <WhiteBishops
                index={index}
                rowindex={rowindex}
                colindex={colindex}
                key={index}
                cords={cords}
                availableSquares={availableSquares}
                occupied={"WhiteBishop"}
              ></WhiteBishops>
            </div>
          )}
        </Draggable>
      );
    } else if (index == 3) {
      chessPice = (
        <Draggable draggableId={`${index}`} key={index} index={index}>
          {(provided) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <WhiteKing
                index={index}
                rowindex={rowindex}
                colindex={colindex}
                key={index}
                cords={cords}
                availableSquares={availableSquares}
                occupied={"WhiteKing"}
              ></WhiteKing>
            </div>
          )}
        </Draggable>
      );
    } else if (index == 4) {
      chessPice = (
        <Draggable draggableId={`${index}`} key={index} index={index}>
          {(provided) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <WhiteQueen
                index={index}
                rowindex={rowindex}
                colindex={colindex}
                key={index}
                cords={cords}
                availableSquares={availableSquares}
                occupied={"WhiteQueen"}
              ></WhiteQueen>
            </div>
          )}
        </Draggable>
      );
    } else if (index >= 8 && index <= 15) {
      chessPice = (
        <Draggable draggableId={`${index}`} key={index} index={index}>
          {(provided) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <WhitePawns
                index={index}
                rowindex={rowindex}
                colindex={colindex}
                key={index}
                cords={cords}
                availableSquares={availableSquares}
                occupied={"WhitePawn"}
              ></WhitePawns>
            </div>
          )}
        </Draggable>
      );
    } else if (index == 56 || index == 63) {
      chessPice = (
        <Draggable draggableId={`${index}`} key={index} index={index}>
          {(provided) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <BlackRooks
                index={index}
                rowindex={rowindex}
                colindex={colindex}
                key={index}
                cords={cords}
                availableSquares={availableSquares}
                occupied={"BlackRook"}
              ></BlackRooks>
            </div>
          )}
        </Draggable>
      );
    } else if (index == 57 || index == 62) {
      chessPice = (
        <Draggable draggableId={`${index}`} key={index} index={index}>
          {(provided) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <BlackKnights
                index={index}
                rowindex={rowindex}
                colindex={colindex}
                key={index}
                cords={cords}
                availableSquares={availableSquares}
                occupied={"BlackKnight"}
              ></BlackKnights>
            </div>
          )}
        </Draggable>
      );
    } else if (index == 58 || index == 61) {
      chessPice = (
        <Draggable draggableId={`${index}`} key={index} index={index}>
          {(provided) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <BlackBishops
                index={index}
                rowindex={rowindex}
                colindex={colindex}
                key={index}
                cords={cords}
                availableSquares={availableSquares}
                occupied={"BlackBishop"}
              ></BlackBishops>
            </div>
          )}
        </Draggable>
      );
    } else if (index == 59) {
      chessPice = (
        <Draggable draggableId={`${index}`} key={index} index={index}>
          {(provided) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <BlackKing
                index={index}
                rowindex={rowindex}
                colindex={colindex}
                key={index}
                cords={cords}
                availableSquares={availableSquares}
                occupied={"BlackKing"}
              ></BlackKing>
            </div>
          )}
        </Draggable>
      );
    } else if (index == 60) {
      chessPice = (
        <Draggable draggableId={`${index}`} key={index} index={index}>
          {(provided) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <BlackQueen
                index={index}
                rowindex={rowindex}
                colindex={colindex}
                key={index}
                cords={cords}
                availableSquares={availableSquares}
                occupied={"BlackQueen"}
              ></BlackQueen>
            </div>
          )}
        </Draggable>
      );
    } else if (index >= 48 && index <= 55) {
      chessPice = (
        <Draggable draggableId={`${index}`} key={index} index={index}>
          {(provided) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <BlackPawns
                index={index}
                rowindex={rowindex}
                colindex={colindex}
                key={index}
                cords={cords}
                availableSquares={availableSquares}
                occupied={"BlackPawn"}
              ></BlackPawns>
            </div>
          )}
        </Draggable>
      );
    } else {
      chessPice = (
        <Draggable draggableId={`${index}`} key={index} index={index}>
          {(provided) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <Empty
                index={index}
                rowindex={rowindex}
                colindex={colindex}
                key={index}
                cords={cords}
                availableSquares={availableSquares}
                occupied={false}
              ></Empty>
            </div>
          )}
        </Draggable>
      );
    }
    chessPices.push(chessPice);
    setChessPicesState(chessPices);
    console.log(ChessPicesState);
  }, []);
  return (
    <motion.div
      className={css}
      whileHover={{
        opacity: 0.7,
      }}
    >
      {/* {index} {rowindex} {colindex} */}

      <DragDropContext onDragEnd={(results) => HandleDragDrop(results)}>
        <Droppable droppableId={"gameBoard"} type="allChessBoardTiles">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {ChessPicesState}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </motion.div>
  );
}
