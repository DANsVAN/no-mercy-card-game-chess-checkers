import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DarkTile from "./chessPices/darkTile";
import LightTile from "./chessPices/LightTile";
import AvailableTile from "./chessPices/availableTile";
let prevTileComingFrom = "";
const rows = 7;
const columns = 7;
let tileIndex = 0;
let css = "";
let TileType = "";
let bordTileArray = [];
let chestBoard = [];
let StateUpdater = [];

function colorPicker(index, row) {
  if (row % 2 === 0) {
    if (index % 2 === 0) {
      css = "bg-black p-6 h-6 w-6 lg:h-28 lg:w-28 sm:h-12 sm:w-12";
      TileType = <DarkTile></DarkTile>;
    } else {
      css = "bg-white p-6 h-6 w-6 lg:h-28 lg:w-28 sm:h-12 sm:w-12";
      TileType = <LightTile></LightTile>;
    }
  } else {
    if (index % 2 === 0) {
      css = "bg-white p-6 h-6 w-6 lg:h-28 lg:w-28 sm:h-12 sm:w-12";
      TileType = <LightTile></LightTile>;
    } else {
      css = "bg-black p-6 h-6 w-6 lg:h-28 lg:w-28 sm:h-12 sm:w-12";
      TileType = <DarkTile></DarkTile>;
    }
  }
  return TileType;
}

export default function ChessBoard() {
  const [chessBoardState, setChessBoardState] = useState("");
  useEffect(() => {
    let startingChessBoard = [];
    for (let rowIndex = 0; rowIndex <= rows; rowIndex++) {
      for (let columnsIndex = 0; columnsIndex <= columns; columnsIndex++) {
        TileType = colorPicker(tileIndex + 1, rowIndex);
        // console.log(TileType);

        if (TileType.type.name == "LightTile") {
          startingChessBoard.push(
            <LightTile
              css={css}
              key={tileIndex}
              rowindex={rowIndex}
              colindex={columnsIndex}
              cords={`${rowIndex} ${columnsIndex}`}
              index={tileIndex}
              handelAvailableTiles={handelAvailableTiles}
            ></LightTile>
          );
          tileIndex++;
        } else if (TileType.type.name == "DarkTile") {
          startingChessBoard.push(
            <DarkTile
              css={css}
              key={tileIndex}
              rowindex={rowIndex}
              colindex={columnsIndex}
              cords={`${rowIndex} ${columnsIndex}`}
              index={tileIndex}
              MovePices={MovePices}
              availableTile={<div></div>}
              handelAvailableTiles={handelAvailableTiles}
            ></DarkTile>
          );
          tileIndex++;
        }
      }
    }
    chestBoard = startingChessBoard;
    console.log(<LightTile></LightTile>);
    console.log(startingChessBoard);
    setChessBoardState(startingChessBoard);
  }, []);

  function MovePices(
    css,
    rowindex,
    colindex,
    cords,
    index,
    MovePices,
    piceType
  ) {
    StateUpdater = [];
    // console.log(css, rowindex, colindex, cords, index, MovePices, piceType);
    if (piceType == "WhiteCheckersPice") {
      console.log(
        css,
        rowindex,
        colindex,
        cords,
        index,
        MovePices,
        piceType,
        123
      );
    } else if (piceType == "BlackCheckersPice") {
      for (let tile of chestBoard) {
        if (
          tile.props.rowindex == rowindex + 1 &&
          tile.type.name == "DarkTile" &&
          tile.props.colindex >= colindex - 1 &&
          tile.props.colindex <= colindex + 1
        ) {
          console.log(tile, "good");
          StateUpdater.push(
            <DarkTile
              css={"bg-red-900 p-6 h-6 w-6 lg:h-28 lg:w-28 sm:h-12 sm:w-12"}
              key={tile.props.index}
              rowindex={tile.props.rowindex}
              colindex={tile.props.colindex}
              cords={`${tile.props.rowindex} ${tile.props.colindex}`}
              index={tile.props.index}
              MovePices={MovePices}
              handelAvailableTiles={handelAvailableTiles}
              tileComingFrom={index}
            ></DarkTile>
          );
        } else {
          StateUpdater.push(tile);
        }
      }
    }
    console.log(StateUpdater);
    setChessBoardState(StateUpdater);
    console.log(chessBoardState);
  }

  function handelAvailableTiles(
    css,
    rowindex,
    colindex,
    cords,
    index,
    MovePices,
    handelAvailableTiles,
    tileComingFrom
  ) {
    for (let Update of StateUpdater) {
      if (Update.props.index == tileComingFrom) {
        console.log(tileComingFrom, "tileComingFrom");
        let Update1 = (
          <DarkTile
            css={"bg-black p-6 h-6 w-6 lg:h-28 lg:w-28 sm:h-12 sm:w-12"}
            key={Update.props.index}
            rowindex={Update.props.rowindex}
            colindex={Update.props.colindex}
            cords={`${Update.props.rowindex} ${Update.props.colindex}`}
            index={Update.props.index}
            MovePices={MovePices}
            handelAvailableTiles={handelAvailableTiles}
            tileComingFrom={tileComingFrom}
          ></DarkTile>
        );
        StateUpdater[Update.props.index] = Update1;
        console.log(Update1);
      }
      if (
        Update.props.css ===
        "bg-red-900 p-6 h-6 w-6 lg:h-28 lg:w-28 sm:h-12 sm:w-12"
      ) {
        let Update2 = (
          <DarkTile
            css={"bg-red-900 p-6 h-6 w-6 lg:h-28 lg:w-28 sm:h-12 sm:w-12"}
            rowindex={Update.props.rowindex}
            colindex={Update.props.colindex}
            cords={Update.props.cords}
            index={Update.props.index}
            MovePices={Update.props.MovePices}
            handelAvailableTiles={handelAvailableTiles}
            tileComingFrom={tileComingFrom}
            key={Update.props.index}
          ></DarkTile>
        );
        StateUpdater[Update.props.index] = Update2;
        console.log(Update);
        console.log(Update.props.index);
      }
    }
    console.log(StateUpdater);
    setChessBoardState(StateUpdater);
    console.log(chessBoardState);
  }

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
