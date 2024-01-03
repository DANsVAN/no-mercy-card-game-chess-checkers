export default function WhiteCheckersPices({
  css,
  rowindex,
  colindex,
  cords,
  index,
  MovePices,
}) {
  return (
    <div className="text-5xl text-white text-center">
      <h1>
        <button
          onClick={() =>
            MovePices(
              css,
              rowindex,
              colindex,
              cords,
              index,
              MovePices,
              "WhiteCheckersPice"
            )
          }
        >
          O
        </button>
      </h1>
    </div>
  );
}
