// import { ReactNode, useState } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// interface CardData {
//   id: number;
//   img?: string;
//   content?: ReactNode;
// }

// interface StackProps {
//   cardsData: CardData[];
//   cardDimensions: { width: number; height: number };
//   sensitivity?: number;
//   sendToBackOnClick?: boolean;
//   randomRotation?: boolean;
//   children?: ReactNode;
//   onSendToBack?: (id: number) => void; // ✅ Parent callback
// }

// interface CardRotateProps {
//   children: ReactNode;
//   sensitivity: number;
//   onSendToBack?: () => void;
// }

// function CardRotate({ children, sensitivity, onSendToBack }: CardRotateProps) {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useSpring(y, { stiffness: 100, damping: 10 });
//   const rotateY = useSpring(x, { stiffness: 100, damping: 10 });

//   const handleDragEnd = (_: any, info: any) => {
//     // Swipe down threshold to send card to back
//     if (info.offset.y > sensitivity && onSendToBack) {
//       onSendToBack();
//     }
//   };

//   return (
//     <motion.div
//       style={{ x, y, rotateX, rotateY }}
//       drag
//       dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
//       dragElastic={0.6}
//       whileTap={{ cursor: "grabbing" }}
//       onDragEnd={handleDragEnd} // ✅ handle swipe-to-back
//       className="absolute top-0 left-0 w-full h-full cursor-grab"
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default function Stack({
//   cardsData,
//   cardDimensions,
//   sensitivity = 100,
//   sendToBackOnClick = true,
//   randomRotation = false,
//   children,
//   onSendToBack, // ✅ parent callback
// }: StackProps) {
//   const [stack, setStack] = useState(cardsData);

//   const handleSendToBack = (id: number) => {
//     const index = stack.findIndex((c) => c.id === id);
//     if (index === -1) return;

//     const newStack = [...stack];
//     const [card] = newStack.splice(index, 1);
//     newStack.push(card); // move to back
//     setStack(newStack);

//     if (onSendToBack) onSendToBack(id); // ✅ notify parent
//   };

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: cardDimensions.width + 60, // extra width for stack visibility
//         height: cardDimensions.height,
//         perspective: 600,
//         margin: "0 auto",
//       }}
//     >
//       {stack.map((card, index) => {
//         const baseAngle = -8;
//         const angleStep = 3.5;
//         const rotation = randomRotation
//           ? Math.random() * 10 - 5
//           : baseAngle + index * angleStep;
//         const offset = index * 18;
//         const zIndex = stack.length - index;

//         return (
//           <CardRotate
//             key={card.id}
//             sensitivity={sensitivity}
//             onSendToBack={() =>
//               sendToBackOnClick && handleSendToBack(card.id)
//             }
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: offset,
//                 width: cardDimensions.width,
//                 height: cardDimensions.height,
//                 borderRadius: 20,
//                 background: "#fff",
//                 boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
//                 overflow: "hidden",
//                 zIndex,
//                 border: "4px solid #fff",
//                 transition: "left 0.3s cubic-bezier(.4,0,.2,1)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transform: `rotate(${rotation}deg)`,
//               }}
//             >
//               {card.content ? (
//                 card.content
//               ) : card.img ? (
//                 <img
//                   src={card.img}
//                   alt={`card-${card.id}`}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     pointerEvents: "none",
//                     borderRadius: 16,
//                   }}
//                 />
//               ) : null}
//             </div>
//           </CardRotate>
//         );
//       })}
//       {children}
//     </div>
//   );
// }



import { ReactNode, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CardData {
  id: number;
  img?: string;
  content?: ReactNode;
}

interface StackProps {
  cardsData: CardData[];
  cardDimensions: { width: number; height: number };
  sensitivity?: number;
  sendToBackOnClick?: boolean;
  randomRotation?: boolean;
  children?: ReactNode;
  // ✅ UPDATED: Renamed from onSendToBack for clarity and dot functionality
  onSendToBack?: (newActiveIndex: number) => void; 
}

interface CardRotateProps {
  children: ReactNode;
  sensitivity: number;
  onSendToBack?: () => void;
}

function CardRotate({ children, sensitivity, onSendToBack }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 100, damping: 10 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 10 });

  const handleDragEnd = (_: any, info: any) => {
    // Swipe down threshold to send card to back
    if (info.offset.y > sensitivity && onSendToBack) {
      onSendToBack();
    }
  };

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd} // handle swipe-to-back
      className="absolute top-0 left-0 w-full h-full cursor-grab"
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  cardsData,
  cardDimensions,
  sensitivity = 100,
  sendToBackOnClick = true,
  randomRotation = false,
  children,
  // ✅ UPDATED: Changed prop name to onActiveCardChange
  onSendToBack, 
}: StackProps) {
  const [stack, setStack] = useState(cardsData);

  const originalIndexMap = new Map(cardsData.map((card, idx) => [card.id, idx]));

    // Report the initial active card (stack[0])
    // The initial active index is always 0.
    useEffect(() => {
        if (onSendToBack && stack.length > 0) {
            onSendToBack(0); // The first card in cardsData is always index 0.
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSendToBack = (id: number) => {
        const index = stack.findIndex((c) => c.id === id);
        if (index === -1) return;

        const newStack = [...stack];
        const [card] = newStack.splice(index, 1);
        newStack.push(card); // move the swiped card to the back
        setStack(newStack);

        // ✅ FIX DOTS: Determine and report the NEW active card's original index
        if (onSendToBack && newStack.length > 0) {
            // The new active card is the one now at index 0 of the newStack
            const nextActiveCard = newStack[0];
            const newActiveOriginalIndex = originalIndexMap.get(nextActiveCard.id) ?? 0;
            
            // Call the prop function, passing the new active original index (a number)
            onSendToBack(newActiveOriginalIndex);
        }
    };

  return (
    <div
      style={{
        position: "relative",
        width: cardDimensions.width + 60, // extra width for stack visibility
        height: cardDimensions.height,
        perspective: 600,
        margin: "0 auto",
      }}
    >
      {stack.map((card, index) => {
        const baseAngle = -8;
        const angleStep = 3.5;
        const rotation = randomRotation
          ? Math.random() * 10 - 5
          : baseAngle + index * angleStep;
        const offset = index * 18;
        const zIndex = stack.length - index;

        return (
          <CardRotate
            key={card.id}
            sensitivity={sensitivity}
            onSendToBack={() =>
              sendToBackOnClick && handleSendToBack(card.id)
            }
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: offset,
                width: cardDimensions.width,
                height: cardDimensions.height,
                borderRadius: 20,
                background: "#fff",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
                overflow: "hidden",
                zIndex,
                border: "4px solid #fff",
                transition: "left 0.3s cubic-bezier(.4,0,.2,1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `rotate(${rotation}deg)`,
              }}
            >
              {card.content ? (
                card.content
              ) : card.img ? (
                <img
                  src={card.img}
                  alt={`card-${card.id}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    pointerEvents: "none",
                    borderRadius: 16,
                  }}
                />
              ) : null}
            </div>
          </CardRotate>
        );
      })}
      {children}
    </div>
  );
}