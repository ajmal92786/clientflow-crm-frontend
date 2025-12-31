function StatusItem({ counts, status, cfg, Icon }) {
  return (
    <div
      className="card rounded-3 text-white px-3 py-2 border-0"
      style={{
        backgroundImage: `url(${cfg.bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="d-flex gap-1 align-items-center">
        <Icon />
        <span>{cfg.label}</span>
      </div>
      <h2>{counts[status] || 0}</h2>
    </div>
  );
}

export default StatusItem;
