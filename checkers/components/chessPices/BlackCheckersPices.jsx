import { useEffect } from "react";
export default function BlackCheckersPices({
  css,
  rowindex,
  colindex,
  cords,
  index,
  MovePices,
  tileComingFrom,
}) {
  return (
    <div className="text-5xl text-center text-black">
      <h2>
        <button
          onClick={() =>
            MovePices(
              css,
              rowindex,
              colindex,
              cords,
              index,
              MovePices,
              "BlackCheckersPice"
            )
          }
        >
          O
        </button>
      </h2>
    </div>
  );
}
