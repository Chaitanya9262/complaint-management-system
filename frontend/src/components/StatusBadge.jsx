function StatusBadge({ status }) {
  const getBadgeClass = () => {
    switch (status) {
      case "PENDING":
        return "bg-warning text-dark";

      case "IN_PROGRESS":
        return "bg-primary";

      case "RESOLVED":
        return "bg-success";

      default:
        return "bg-secondary";
    }
  };

  return (
    <span className={`badge ${getBadgeClass()}`}>
      {status?.replace("_", " ")}
    </span>
  );
}

export default StatusBadge;