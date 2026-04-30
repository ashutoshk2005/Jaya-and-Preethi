// ============================================================
//  utils/format.js
//  Shared utility functions
// ============================================================

/** Format a number as Indian Rupees: ₹ 1,48,000.00 */
export const fmt = (n) => `₹ ${Number(n).toLocaleString('en-IN')}.00`;
