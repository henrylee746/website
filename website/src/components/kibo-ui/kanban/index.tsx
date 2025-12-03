"use client";

import {
  createContext,
  type HTMLAttributes,
  type ReactNode,
  useContext,
} from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type KanbanItemProps = {
  id: string;
  name: string;
  column: string;
} & Record<string, unknown>;

type KanbanColumnProps = {
  id: string;
  name: string;
} & Record<string, unknown>;

type KanbanContextProps<
  T extends KanbanItemProps = KanbanItemProps,
  C extends KanbanColumnProps = KanbanColumnProps
> = {
  columns: C[];
  data: T[];
};

const KanbanContext = createContext<KanbanContextProps>({
  columns: [],
  data: [],
});

export type KanbanBoardProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export const KanbanBoard = ({ id, children, className }: KanbanBoardProps) => {
  return (
    <div
      className={cn(
        "flex size-full min-h-40 flex-col divide-y overflow-hidden rounded-md border bg-secondary text-xs shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export type KanbanCardProps<T extends KanbanItemProps = KanbanItemProps> = T & {
  children?: ReactNode;
  className?: string;
};

export const KanbanCard = <T extends KanbanItemProps = KanbanItemProps>({
  id,
  name,
  children,
  className,
}: KanbanCardProps<T>) => {
  return (
    <Card className={cn("gap-4 rounded-md p-1.5 shadow-sm ", className)}>
      {children ?? <p className="m-0 font-medium text-sm">{name}</p>}
    </Card>
  );
};

export type KanbanCardsProps<T extends KanbanItemProps = KanbanItemProps> =
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "id"> & {
    children: (item: T) => ReactNode;
    id: string;
  };

export const KanbanCards = <T extends KanbanItemProps = KanbanItemProps>({
  children,
  className,
  ...props
}: KanbanCardsProps<T>) => {
  const { data } = useContext(KanbanContext) as KanbanContextProps<T>;
  const filteredData = data.filter((item) => item.column === props.id);

  return (
    <ScrollArea className="overflow-hidden">
      <div
        className={cn("flex flex-grow flex-col gap-2 p-2 ", className)}
        {...props}
      >
        {filteredData.map(children)}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

export type KanbanHeaderProps = HTMLAttributes<HTMLDivElement>;

export const KanbanHeader = ({ className, ...props }: KanbanHeaderProps) => (
  <div className={cn("m-0 p-2 font-semibold text-sm", className)} {...props} />
);

export type KanbanProviderProps<
  T extends KanbanItemProps = KanbanItemProps,
  C extends KanbanColumnProps = KanbanColumnProps
> = {
  children: (column: C) => ReactNode;
  className?: string;
  columns: C[];
  data: T[];
};

export const KanbanProvider = <
  T extends KanbanItemProps = KanbanItemProps,
  C extends KanbanColumnProps = KanbanColumnProps
>({
  children,
  className,
  columns,
  data,
}: KanbanProviderProps<T, C>) => {
  return (
    <KanbanContext.Provider value={{ columns, data }}>
      <div
        className={cn(
          "grid size-full auto-cols-fr grid-flow-col gap-4 ",
          className
        )}
      >
        {columns.map((column) => children(column))}
      </div>
    </KanbanContext.Provider>
  );
};
