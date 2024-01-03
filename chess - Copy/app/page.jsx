"use client";
import ChessBoard from "@/components/chessboard";
export default function HomePage() {
  return (
    <div className="bg-gradient-to-t from-gray-500 to-gray-500 h-screen flex items-center justify-center">
      {" "}
      <ChessBoard className=""></ChessBoard>
    </div>
  );
}
