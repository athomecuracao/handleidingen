/**
 * Wachtwoordbeveiliging voor At Home Curaçao handleidingen.
 * Gebruikt SHA-256 hash van het wachtwoord, opgeslagen in sessionStorage.
 */
(function () {
  // SHA-256 hash van het wachtwoord "AtHome2026!"
  // Wijzig dit door een nieuw wachtwoord te hashen via: https://emn178.github.io/online-tools/sha256.html
  const VALID_HASH = "b353b42c4c7902afdd13232f4028a6337266f33e73f443b3fb8ffb4064fa926f";

  const LOGIN_PAGE = "/login/";
  const STORAGE_KEY = "athome_auth";

  // Skip auth check on login page
  if (window.location.pathname.endsWith("/login/") || window.location.pathname.endsWith("/login/index.html")) {
    return;
  }

  // Check if user is authenticated
  const storedHash = sessionStorage.getItem(STORAGE_KEY);
  if (storedHash !== VALID_HASH) {
    // Get base URL for the site
    const baseUrl = document.querySelector('meta[name="site-url"]')?.content || "/";
    window.location.href = baseUrl + "login/";
  }
})();
