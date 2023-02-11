import React from "react";

const Add = () => {
  return (
    <div className="absolute h-full w-full bg-black/70 rounded-xl flex items-center justify-center">
      <div className="w-3/4 h-3/4 bg-white rounded-xl">
        <div className="flex justify-center items-center w-full h-[10%] text-xl bg-slate-50 rounded-t-xl">
          <span>New Promotion</span>
        </div>
        <form className="h-[90%] py-4 px-8 rounded-b-xl">
          <div className="h-[20%] flex justify-between items-center">
            <div className="flex flex-col ">
              <label htmlFor="title">Add Promotion Title</label>
              <input
                className="italic font-mono outline-none py-2"
                type="text"
                name="title"
                id="title"
                placeholder="Enter Promotion Title"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="promotion">Add Promotion Image</label>
              <input
                className="italic font-mono outline-none py-2"
                type="file"
                name="promotion"
                id="promotion"
              />
            </div>
            <button className="px-4 py-2 bg-green-200 rounded-2xl hover:bg-green-300">
              + Add
            </button>
          </div>
          <div className="w-full h-[80%] border-2 border-dashed flex justify-center items-center ">
            <span className="border-dashed border-2 p-4">No Image Choosed</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
