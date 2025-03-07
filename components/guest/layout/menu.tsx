"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { ModeToggle } from "./ThemeToggle";

export function Menu() {
  return (
    <div className="">
      <Modal>
        <ModalTrigger className="bg-white p-4 flex justify-center ">
          <div className=" flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="mt-5 flex flex-col justify-between">
            <div>
              <div className="px-2 py-2 ">Home</div>
              <div className="px-2 py-2 ">Categories</div>
              <div className="px-2 py-2 ">About</div>
              <div className="px-2 py-2 ">Contact</div>
            </div>
            <div className="px-2 py-2 flex justify-between items-center">
              Theme
              <ModeToggle />
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
