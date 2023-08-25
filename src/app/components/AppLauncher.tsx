"use client";
import { Button, Carousel, Modal, Row } from "antd";
import AppNode from "./AppNode";
import { LeftOutlined } from "@ant-design/icons";

import {
  Fragment,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { mockData } from "../mockData/products";
import AppDetail from "./AppDetail";
import GroupInfoButton from "./GroupInfoButton";
import styled from "styled-components";
import { findParentNode, makeMap } from "../utils/tree";
import { makekey } from "../utils/string";

const getNodesAPI = async () => new Promise((resolve) => resolve(mockData));

const CarouselWrapper = styled(Carousel)`
  margin: 2rem 0;
  > .slick-dots li button {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: rgb(229, 231, 235);
  }
  > .slick-dots li.slick-active button {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: rgb(220, 38, 38);
  }
`;

export const NodeContext = createContext<any>(null);

function AppLauncher() {
  const [nodesMap, setNodesMap] = useState<Map<any, any>>(new Map());
  const [currentNode, setCurrentNode] = useState<any>(null);
  const [currentGroup, setCurrentGroup] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const onCancel = () => setModalOpen(false);

  const back = useCallback(() => {
    const targetId = currentGroup.parentId;
    const parentNode = findParentNode(targetId, nodesMap);
    setCurrentGroup(parentNode);
  }, [currentGroup?.parentId, nodesMap, setCurrentGroup]);

  const renderGroupMenu = useCallback(() => {
    if (!currentGroup) return <></>;
    const modalTitle = modalOpen ? currentGroup?.name : currentNode?.name;
    const shouldShowBackButton = currentGroup?.depth > 0;
    return (
      <>
        <div className="flex justify-between mb-3">
          <div>
            {shouldShowBackButton && (
              <Button onClick={back} type="text" icon={<LeftOutlined />} />
            )}
          </div>
          <h3 className="grow text-2xl font-semibold text-center">
            {modalTitle}
          </h3>
          <GroupInfoButton {...currentGroup} />
        </div>
        <Row style={{ minHeight: 150 }}>
          {Array.from(currentGroup.children.values()).map((node: any) => (
            <AppNode key={makekey()} {...node} />
          ))}
        </Row>
      </>
    );
  }, [back, currentGroup, currentNode?.name, modalOpen]);

  const getModalContent = useCallback(() => {
    if (!currentNode) return <></>;
    const isGroup = Boolean(currentNode?.children?.size);
    return (
      <Fragment>
        {isGroup ? renderGroupMenu() : <AppDetail {...currentNode} />}
      </Fragment>
    );
  }, [currentNode, renderGroupMenu]);

  const fetchNodes = useCallback(async () => {
    const data = await getNodesAPI();
    const nodesMap = makeMap(data);

    setNodesMap(nodesMap);
  }, []);

  useEffect(() => {
    fetchNodes();
  }, [fetchNodes]);

  const ModalProps = useMemo(
    () => ({
      closeIcon: false,
      maskClosable: true,
      open: modalOpen,
      footer: null,
      width: 720,
      onCancel,
    }),
    [modalOpen]
  );

  return (
    <NodeContext.Provider
      value={{
        setCurrentGroup,
        currentNode,
        setCurrentNode,
        setModalOpen,
        nodesMap,
      }}
    >
      <CarouselWrapper>
        <div>
          <Row className="p-5">
            {Array.from(nodesMap.values()).map((node: any) => (
              <AppNode key={makekey()} {...node} />
            ))}
          </Row>
        </div>
        <div>
          <Row className="p-5">
            {Array.from(nodesMap.values()).map((node: any) => (
              <AppNode key={makekey()} {...node} />
            ))}
          </Row>
        </div>
      </CarouselWrapper>

      {currentNode && <Modal {...ModalProps}>{getModalContent()}</Modal>}
    </NodeContext.Provider>
  );
}

export default AppLauncher;
