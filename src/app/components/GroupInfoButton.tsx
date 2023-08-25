import { Button, Popover } from "antd";
import React, { Fragment, useState } from "react";
import AppDetail from "./AppDetail";
import { AppNodeProps } from "./AppNode";
import { InfoCircleOutlined } from "@ant-design/icons";

export default function GroupInfoButton(currentNode: AppNodeProps) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Fragment>
      <Popover
        arrow={false}
        rootClassName="w-4/5 md:w-2/5"
        content={<AppDetail {...currentNode} />}
        trigger="click"
        placement="left"
        open={open}
        onOpenChange={handleOpenChange}
      ></Popover>
      <Button
        onClick={() => setOpen(true)}
        type="text"
        icon={<InfoCircleOutlined />}
      />
    </Fragment>
  );
}
