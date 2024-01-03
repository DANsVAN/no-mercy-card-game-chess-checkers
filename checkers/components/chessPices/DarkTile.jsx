import WhiteCheckersPices from "./WhiteCheckersPices";
import WhiteCheckersPicesKing from "./WhiteCheckersPicesKing";
import BlackCheckersPices from "./BlackCheckersPices";
import BlackCheckersPicesKIng from "./BlackCheckersPicesKIng";
import { useEffect, useState } from "react";
let tileContent = "";
let prevTileComingFrom = "";
export default function DarkTile({
  css,
  rowindex,
  colindex,
  cords,
  index,
  MovePices,
  handelAvailableTiles,
  tileComingFrom,
}) {
  const [TileContentState, setTileContentState] = useState(tileContent);
  const [TileCSSState, setTileCSSState] = useState(css);
  console.log(tileComingFrom, "tileComingFrom", index, "index");
  useEffect(() => {
    if (tileComingFrom === index) {
      tileContent = <div></div>;
      setTileContentState(tileContent);
    }
    prevTileComingFrom = tileComingFrom;
  }, [tileComingFrom]);

  useEffect(() => {
    setTileCSSState(css);
  }, [css]);
  useEffect(() => {
    if (index < 24) {
      tileContent = (
        <BlackCheckersPices
          css={css}
          rowindex={rowindex}
          colindex={colindex}
          cords={cords}
          index={index}
          MovePices={MovePices}
          tileComingFrom={tileComingFrom}
        ></BlackCheckersPices>
      );
    } else if (index > 39) {
      tileContent = (
        <WhiteCheckersPices
          css={css}
          rowindex={rowindex}
          colindex={colindex}
          cords={cords}
          index={index}
          MovePices={MovePices}
        ></WhiteCheckersPices>
      );
    } else {
      tileContent = <div></div>;
    }
    console.log(tileContent);
    setTileContentState(tileContent);
  }, []);
  return (
    <div
      onClick={() =>
        handelAvailableTiles(
          css,
          rowindex,
          colindex,
          cords,
          index,
          MovePices,
          handelAvailableTiles,
          tileComingFrom
        )
      }
      className={TileCSSState}
    >
      {TileContentState}
    </div>
  );
}
