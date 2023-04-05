import React from "react";

const Modal = ({ setUserModal }) => {
  return (
    <section onClick={() => setUserModal((p) => !p)} className="m-32">
      <div className="fixed left-0 right-0 bottom-0 top-0 bg-[rgba(189,189,189,0.9)]"></div>

      <div className="fixed top-[50%] left-[50%] max-w-xl translate-x-[-50%] translate-y-[-50%] bg-white px-8 py-14 rounded-sm">
        <h2 className="text-xl mb-4">User: Alamin pk</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p className="mb-4">Lorem ipsum dolor sit amet.</p>
        <button
          className=" px-2 py-7 font-semibold border rounded-sm bg-[#212121] text-white cursor-pointer font-mono translate-x-3"
          onClick={() => setUserModal((p) => !p)}
        >
          It's You
        </button>
      </div>
    </section>
  );
};

export default Modal;
