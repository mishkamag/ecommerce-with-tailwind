import React from "react";
import { MdDoneAll, MdRemoveDone } from "react-icons/md";
import Spinner from "./Spinner";

const IsLoading = ({
  message,
  isLoading,
  isAdded,
  setIsAdded,
  error,
  setError,
  setIsLoading,
  setSelectedImage,
}) => {
  return (
    <>
      {isLoading ? (
        <div className="absolute z-50 w-full h-full rounded xl bg-black/50 flex justify-center items-center">
          {isAdded ? (
            <div className="flex flex-col items-center justify-center bg-white/90 py-8 px-16">
              <div className="text-8xl text-green-400 mx-auto mb-2">
                {error ? (
                  <span className="text-red">
                    <MdRemoveDone />
                  </span>
                ) : (
                  <MdDoneAll />
                )}
              </div>
              <h1 className="text-2xl font-semibold italic font-mono mb-4">
                {error ? error.message : message}
              </h1>
              <button
                className="bg-blue-300 text-xl text-white py-2 px-6 rounded-xl hover:bg-blue-400"
                onClick={() => {
                  setIsAdded(false);
                  setIsLoading(false);
                  setSelectedImage && setSelectedImage(null);
                  error && setError(null);
                }}
              >
                Done
              </button>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      ) : null}
    </>
  );
};

export default IsLoading;
