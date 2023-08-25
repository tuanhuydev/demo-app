import { FileOutlined, FolderOutlined } from "@ant-design/icons";
import { Col, Typography } from "antd";
import { memo, useContext } from "react";
import { NodeContext } from "./AppLauncher";
import Image from "next/image";
import { makekey } from "../utils/string";

export interface AppNodeProps {
  id: number;
  parentId?: number;
  name: string;
  imgSrc?: string;
  modules?: string;
  algorithm?: string;
  capability?: string;
  subModules?: Array<string>;
  subFeatures?: Array<string>;
  children?: Map<any, any>;
}

function AppNode(node: AppNodeProps) {
  const { children, name, imgSrc = "" } = node;
  const isGroup = Boolean(children?.size);
  // Hook
  const { setCurrentGroup, setModalOpen, setCurrentNode } =
    useContext(NodeContext);

  const clickNode = () => {
    if (children?.size) setCurrentGroup(node);
    setCurrentNode(node);
    setModalOpen(true);
  };
  const makeGroupIcon = () => {
    const groupImages = [];
    if (node.children) {
      for (let childNode of node.children.values()) {
        const isLeafNode = !childNode.children.size;
        if (isLeafNode && childNode.imgSrc) {
          groupImages.push(childNode.imgSrc);
        }
      }
    }
    if (groupImages.length) {
      return (
        <div className="grid grid-rows-2 grid-cols-2 grid-flow-row">
          {groupImages.map((image: string) => (
            <Image key={makekey()} alt="image" src={image} width={50} />
          ))}
        </div>
      );
    }
    return <FolderOutlined />;
  };

  const icon = isGroup ? (
    makeGroupIcon()
  ) : imgSrc ? (
    <Image src={imgSrc} alt="icon" width={300} />
  ) : (
    <FileOutlined />
  );

  return (
    <Col span={24} md={8} lg={6} className="cursor-pointer duration-300 transition-all">
      <div className=" flex items-center justify-center flex-col p-3 min-w-0">
        <div
          className="w-24 h-24 rounded-lg border hover:border-red-600  m-0 p-1 flex items-center text-lg justify-center"
          onClick={clickNode}
        >
          {icon}
        </div>
        <Typography.Title
          level={5}
          className="mt-2 text-center truncate text-slate-400 hover:text-color-600 w-fit md:w-36 lg:w-48"
        >
          {name}
        </Typography.Title>
      </div>
    </Col>
  );
}

export default memo(AppNode);
