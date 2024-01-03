import { motion, useDragControls } from "framer-motion";
import { Draggable } from "react-beautiful-dnd";
export default function BlackCheckersPicesKIng({
  index,
  rowindex,
  colindex,
  HandleDrag,
  cords,
  removeContent,
}) {
  const controls = useDragControls();
  function startDrag(event) {
    controls.start(event);
  }
  return (
    <>
      <div onPointerDown={startDrag} style={{ touchAction: "none" }} />
      <div
        className="text-5xl text-black text-center"
        // drag={true}
        // onDragStart={(event, info) =>
        //   HandleDrag(
        //     info.point.x,
        //     info.point.y,
        //     "BlackKing",
        //     index,
        //     rowindex,
        //     colindex,
        //     cords
        //   )
        // }
        // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        // dragElastic={1}
        // dragControls={controls}
        // whileDrag={{ scale: 2 }}
      >
        <h2>
          {" "}
          <button>K </button>
        </h2>
      </div>
      {/* // </motion.div> */}
    </>
  );
}
