import React from 'react';

const ApplyingModal = ({ id, title, onClose, onApplySuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (onApplySuccess) onApplySuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur Background */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md z-10">
        <h2 className="text-2xl font-bold mb-4 text-left"> {title}</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-b border-gray-300 px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 px-4 py-2"
          />
          <input
            type="number"
            placeholder="Phone"
            className="w-full border-b border-gray-300 px-4 py-2"
          />
          <input
            type="file"
            className="w-full border border-gray-300 px-4 py-2"
          />
          <textarea
            placeholder="Message"
            rows={3}
            className="w-full border-b border-gray-300 px-4 py-2 resize-none"
          />

          <div className='flex items-center gap-4'>
            <button
            type="submit"
            className=" cursor-pointer mt-4 bg-black text-white px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Apply
          </button>
          <button
            
            onClick={onClose}
            className="cursor-pointer mt-4 bg-gray-300 text-black px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Cancel
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyingModal;
