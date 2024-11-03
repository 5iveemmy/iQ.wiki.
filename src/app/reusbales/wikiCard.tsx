import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title: string;
  icon: React.JSX.Element;
  headerNode: ReactNode;
  contentNode: ReactNode;
}

const WikiCard = ({ title, icon, headerNode, contentNode }: Props) => {
  return (
    <Card className=" bg-transparent backdrop-filter backdrop-blur-sm border dark:border-white/15 border-gray-200 rounded-xl h-full w-full">
      <CardHeader className="flex-row flex justify-between py-3 px-4 border-b dark:border-white/15 border-gray-200">
        <div className="flex gap-2 items-center">
          {icon}
          <CardTitle className="text-text-color">{title}</CardTitle>
        </div>
        {headerNode}
      </CardHeader>
      <CardContent className="px-0">{contentNode}</CardContent>
    </Card>
  );
};

export default WikiCard;
