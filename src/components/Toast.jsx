function Toast({ show, message, type }) {
  if (!show) {
    return null;
  }

  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      <div
        className={`toast show text-bg-${type}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
}

export default Toast;
