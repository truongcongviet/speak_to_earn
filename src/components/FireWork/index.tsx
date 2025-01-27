import { Key, useEffect, useState } from 'react';

const Confetti = () => {
  const [pieces, setPieces] = useState([] as any);

  const generatePieces = () => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500'];
    return Array(50).map((_, i) => ({
      id: `${i}-${Date.now()}`, // Unique ID for each generation
      color: colors[Math.floor(Math.random() * colors.length)],
      left: Math.random() * 100,
      delay: Math.random() * 3
    }));
  };

  useEffect(() => {
    // Initial pieces
    setPieces(generatePieces());

    // Set up interval to regenerate pieces every 3 seconds
    const interval = setInterval(() => {
      setPieces(generatePieces());
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {pieces.map((piece: { id: Key | null | undefined; color: any; left: any; delay: any; }) => (
        <div
          key={piece.id}
          className={`
            absolute top-0 w-2 h-2 rounded-full ${piece.color}
            animate-[confetti_3s_linear_infinite]
          `}
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`
          }}
        />
      ))}
      <style>
        {`
          @keyframes confetti {
            0% { 
              transform: translateY(-10px) rotateZ(0deg);
              opacity: 1;
            }
            100% { 
              transform: translateY(100vh) rotateZ(720deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Confetti;