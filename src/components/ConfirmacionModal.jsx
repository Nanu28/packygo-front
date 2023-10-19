
import React from 'react';

function ConfirmationModal({ isOpen, onClose, onContinueShopping, onGoToCart }) {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative bg-white rounded-lg p-4">
          <p className="text-lg font-semibold mb-4">¿What would you like you do?</p>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-green-400 text-white px-4 py-2 rounded-lg"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
            <button
              className="bg-blue-400 text-white px-4 py-2 rounded-lg"
              onClick={onGoToCart}
            >
              Pay
            </button>
          </div>
          <button
            className="bg-red-400 text-white px-4 py-2 rounded-lg mt-4"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  );
}

export default ConfirmationModal;
