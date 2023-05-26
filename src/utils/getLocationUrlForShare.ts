export const getLocationUrlForShare = () =>
  typeof window !== "undefined" ? `${window.location.href}` : "";
