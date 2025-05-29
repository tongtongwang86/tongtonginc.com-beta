"use client";

import { useEffect, useState } from "react";
import * as UI from '@/components';
import {
  DndContext,
  closestCenter,
  useDroppable,
  useDraggable,
  DragOverlay,
  DragEndEvent,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { UniqueIdentifier } from "@dnd-kit/core";

import Image from "next/image";

// Literal tier values
const tiers = ["S", "A", "B", "C", "D", "Unranked"] as const;
type Tier = (typeof tiers)[number];

type TierItem = {
  id: string;
  src: string;
  label: string;
};

type TierData = Record<Tier, TierItem[]>;

const initialItems: TierItem[] = [
  { id: "1", src: "/ranking/1.webp", label: "alice" },
  { id: "2", src: "/ranking/2.webp", label: "locking people outta the room" },
  { id: "3", src: "/ranking/3.webp", label: "acnh" },
  { id: "4", src: "/ranking/4.webp", label: "chemistry class" },
  { id: "5", src: "/ranking/5.webp", label: "being cat" },
  { id: "6", src: "/ranking/6.webp", label: "study buddying" },
  { id: "7", src: "/ranking/7.webp", label: "park/picnic" },
  { id: "8", src: "/ranking/8.webp", label: "underrune" },
  { id: "9", src: "/ranking/9.webp", label: "deltatale" },
  { id: "10", src: "/ranking/10.webp", label: "pinning jesus" },
  { id: "11", src: "/ranking/11.webp", label: "morse code" },
  { id: "12", src: "/ranking/12.webp", label: "dream sharing" },
  { id: "13", src: "/ranking/13.webp", label: "alimentari" },
  { id: "14", src: "/ranking/14.webp", label: "hotel lobby talking" },
  { id: "15", src: "/ranking/15.webp", label: "nuclear winter" },
  { id: "16", src: "/ranking/16.webp", label: "your house couch talking" },
  { id: "17", src: "/ranking/17.webp", label: "poking each other to stay awake" },
  { id: "18", src: "/ranking/18.webp", label: "birb watching" },
  { id: "19", src: "/ranking/19.webp", label: "projector music" },
  { id: "20", src: "/ranking/20.webp", label: "rejects outings" },
  { id: "21", src: "/ranking/21.webp", label: "form time" },
  { id: "22", src: "/ranking/22.webp", label: "washing the dishes" },
  { id: "23", src: "/ranking/23.webp", label: "fake nails" },
  { id: "24", src: "/ranking/24.webp", label: "severance" },
  { id: "25", src: "/ranking/25.webp", label: "fishing" },
  { id: "26", src: "/ranking/26.webp", label: "staring at the oven" },
];

function isTier(value: any): value is Tier {
  return tiers.includes(value);
}


export default function Home() {
 const createEmptyTierData = (): TierData =>
  tiers.reduce((acc, tier) => {
    acc[tier] = [];
    return acc;
  }, {} as TierData);

const [tierData, setTierData] = useState<TierData>(() => createEmptyTierData());


  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    setTierData((prev) => ({
      ...prev,
      Unranked: initialItems,
    }));
  }, []);

const findTierByItemId = (id: UniqueIdentifier): string | null => {
  for (const tier of tiers) {
    if (tierData[tier].some((item) => item.id === id)) return tier;
  }
  return null;
};


const handleDragEnd = (event: { active: { id: UniqueIdentifier }; over: { id: UniqueIdentifier } | null }) => {
  const { active, over } = event;
  setActiveId(null);

  if (!over) return;

  const fromTier = findTierByItemId(active.id);
  const toTier = over.id;

  if (!fromTier || !isTier(toTier) || fromTier === toTier) return;

  const fromList = [...tierData[fromTier as Tier]];
  const toList = [...tierData[toTier as Tier]];
  
  const index = fromList.findIndex((item) => item.id === active.id);

  if (index === -1) return;

  const [movedItem] = fromList.splice(index, 1);
  toList.push(movedItem);

  setTierData((prev) => ({
    ...prev,
    [fromTier as Tier]: fromList,
    [toTier as Tier]: toList,
  }));
};


  const activeItem = activeId
    ? tiers.flatMap((t) => tierData[t]).find((i) => i.id === activeId)
    : null;

  return (
       <UI.BodyContainer
          navColor="var(--background)"
          backgroundColor="var(--background2)"
          logoColor="var(--logocolor)"
          hoverShadowColor="var(--logoHover)"
        >
    <div className="min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-6">fav pt pastimes</h1>
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={({ active }) => setActiveId(String(active.id))}
        onDragEnd={handleDragEnd}
        onDragCancel={() => setActiveId(null)}
      >
        <div className="space-y-4">
          {tiers.map((tier) => (
            <TierRow key={tier} tier={tier} items={tierData[tier]} />
          ))}
        </div>

        <DragOverlay>
          {activeItem ? <DraggableItem item={activeItem} isOverlay /> : null}
        </DragOverlay>
      </DndContext>
    </div>
    </UI.BodyContainer>
  );
}

function TierRow({ tier, items }: { tier: Tier; items: TierItem[] }) {
  const { setNodeRef, isOver } = useDroppable({ id: tier });

  const tierGradients: Record<Tier, string> = {
    S: "linear-gradient(to right, rgb(255, 127, 127) 0%, transparent 5%)",
    A: "linear-gradient(to right, rgb(255, 191, 127) 0%, transparent 5%)",
    B: "linear-gradient(to right, rgb(255, 223, 127) 0%, transparent 5%)",
    C: "linear-gradient(to right, rgb(255, 255, 127) 0%, transparent 5%)",
    D: "linear-gradient(to right, rgb(191, 255, 127) 0%, transparent 5%)",
    Unranked: "linear-gradient(to right, #6b7280 0%, transparent 90%)",
  };

  return (
    <div
      ref={setNodeRef}
      className={`p-4 border rounded-lg transition-all ${
        isOver ? "ring-2 ring-blue-400" : ""
      }`}
      style={{
        background: tierGradients[tier],
      }}
    >
      <h2 className="text-lg font-semibold mb-2">{tier} Tier</h2>
      <div className="flex gap-3 flex-wrap min-h-[80px] bg-black/10 p-2 rounded-md">
        {items.map((item) => (
          <DraggableItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function DraggableItem({
  item,
  isOverlay = false,
}: {
  item: TierItem;
  isOverlay?: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({
      id: item.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    width: "5rem",
    minWidth: "5rem",
  };

  return (
    <div
      ref={setNodeRef}
      style={isOverlay ? style : {}}
      {...(isOverlay ? {} : attributes)}
      {...(isOverlay ? {} : listeners)}
      className="w-20 text-center cursor-grab"
    >
      <div className="w-20 h-20 rounded-md overflow-hidden flex items-center justify-center">
        <Image
          src={item.src}
          alt={item.label}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <p className="text-xs mt-1 text-white">{item.label}</p>
    </div>
  );
}
