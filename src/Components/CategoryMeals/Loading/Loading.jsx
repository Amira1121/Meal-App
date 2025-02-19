import './Loading.scss';

function Loading() {
  return (
    <div className="loading-container">
      <div className="toast">
        <div className="toast-content">
          <div className="spinner"></div>
          <p>Preparing your meals...</p>
        </div>
      </div>
    </div>
  );
}

export default Loading;