function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium text-stone-800">
        Delete {resourceName}
      </h3>
      <p className="text-stone-500">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-2">
        <button
          className="rounded-lg border border-stone-200 bg-stone-100 px-4 py-2 text-stone-700 transition-all duration-300 hover:border-stone-400 hover:bg-stone-200"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </button>

        <button
          className="rounded-lg bg-red-700 px-4 py-2 text-stone-100 transition-all duration-300 hover:bg-red-800"
          disabled={disabled}
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
