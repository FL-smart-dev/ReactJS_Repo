import React from 'react';
import { Modal, Row, Col } from 'antd';
import LinkType1 from '../LinkTypes/LinkType1';

import LinkType2 from '../LinkTypes/LinkType2';
import LinkType3 from '../LinkTypes/LinkType3';
import LinkType4 from '../LinkTypes/LinkType4';
import LinkType5 from '../LinkTypes/LinkType5';
import LinkType6 from '../LinkTypes/LinkType6';

const LinkTypeModal = ({ visible, onClose,selectHandler,linkItem}) => (
  <Modal
    title="Pick a link type from our library"
    visible={visible}
    onCancel={onClose}
    footer={null}
    width={800}
  >
  <Row gutter={[16, 16]}>
      <Col span={12} onClick={() => selectHandler('arrow')}><LinkType1 linkItem={linkItem} /></Col>
      <Col span={12} onClick={() => selectHandler('gradient')}><LinkType2 linkItem={linkItem} /></Col>
      <Col span={12} onClick={() => selectHandler('info')}><LinkType3 linkItem={linkItem}/></Col>
      <Col span={12} onClick={() => selectHandler('event')}><LinkType4 linkItem={linkItem}/></Col>
      {/* <Col span={12} onClick={() => selectHandler('linkwithheadline')}><LinkType5 linkItem={linkItem} /></Col> */}
      <Col span={12} onClick={() => selectHandler('button')}><LinkType6  linkItem={linkItem}/></Col>
    </Row>
  </Modal>
);

export default LinkTypeModal;
