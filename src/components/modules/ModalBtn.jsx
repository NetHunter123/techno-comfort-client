"use client"
import {useDisclosure} from '@mantine/hooks';
import {Modal, Button} from '@mantine/core';

function ModalBtn() {
  const [opened, {open, close}] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* ModalBtn content */}<h1>Content</h1>
      </Modal>

      <Button  onClick={open}>Open modal</Button>
    </>
  );
}

export default ModalBtn
