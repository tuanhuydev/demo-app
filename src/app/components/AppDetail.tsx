import { Button, Col, Row } from "antd";
import React, { useCallback, useContext } from "react";
import { AppNodeProps } from "./AppNode";
import { LeftOutlined } from "@ant-design/icons";
import { makekey } from "../utils/string";
import { findParentNode } from "../utils/tree";
import { NodeContext } from "./AppLauncher";

interface AppDetailProps extends AppNodeProps {
  back?: any;
}

export default function AppDetail(node: AppDetailProps) {
  const {
    name,
    modules = "-",
    algorithm = "-",
    capability = "-",
    parentId,
    subModules = [],
    subFeatures = [],
  } = node;

  const { nodesMap, setCurrentGroup, setCurrentNode } = useContext(NodeContext);

  const back = useCallback(() => {
    if (parentId) {
      const parentNode = findParentNode(node?.parentId, nodesMap);
      setCurrentGroup(parentNode);
      setCurrentNode(parentNode);
    }
  }, [node?.parentId, nodesMap, parentId, setCurrentGroup, setCurrentNode]);

  return (
    <Row>
      <Col span={24} className="mb-4 flex justify-between">
        <div>
          {parentId && (
            <Button
              type="text"
              onClick={back}
              icon={<LeftOutlined />}
              className="text-xl font-bold"
            />
          )}
        </div>
        <h3 className="font-bold text-2xl inline-block text-center">{name}</h3>
        <div></div>
      </Col>
      <Col span={24} className="mb-4 flex">
        <h4 className="font-semibold inline-block mr-3">Modules:</h4>
        <p>{modules}</p>
      </Col>
      <Col span={24} md={12} className="mb-4 flex">
        <h4 className="font-semibold inline-block mr-3">Capability:</h4>
        <p>{capability}</p>
      </Col>
      <Col span={24} md={12} className="mb-4 flex">
        <h4 className="font-semibold inline-block mr-3">Algorithm:</h4>
        <p>{algorithm}</p>
      </Col>

      <Col span={24} md={12} className="mb-4">
        <h4 className="inline font-medium">Sub modules:</h4>
        <ul>
          {subModules.map((module: string) => (
            <li key={makekey()}>{module}</li>
          ))}
        </ul>
      </Col>

      <Col sm={24} md={12} className="mb-4">
        <h4 className="inline font-medium">Sub features:</h4>
        {subFeatures?.length ? (
          <ul>
            {subFeatures.map((module: string) => (
              <li key={makekey()}>{module}</li>
            ))}
          </ul>
        ) : (
          <span>-</span>
        )}
      </Col>
    </Row>
  );
}
