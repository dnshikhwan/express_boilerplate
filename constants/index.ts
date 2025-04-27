export const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    severity: 5,
    silly: 6,
  },
  colors: {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "green",
    verbose: "blue",
    severity: "purple",
    silly: "purple",
  },
};

export const HTTP_RESPONSE_CODE = {
  NOT_FOUND: 404,
  CREATED: 201,
  CONFLICT: 409,
  TOO_MANY_REQUEST: 429,
  BAD_REQUEST: 400,
  OK: 200,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
  FORBIDDEN: 403,
};

export const enum HttpStatusCode {
  NOT_FOUND = 404,
  CREATED = 201,
  CONFLICT = 409,
  TOO_MANY_REQUEST = 429,
  BAD_REQUEST = 400,
  SUCCESS = 200,
  UNAUTHORIZED = 401,
  SERVER_ERROR = 500,
  FORBIDDEN = 403,
}

export const APP_MESSAGE = {
  // ─── General ──────────────────────────────────────────────────────
  success: "Request completed successfully.",
  serverError: "An unexpected error occurred. Please try again later.",
  serviceUnavailable:
    "Service temporarily unavailable. Please try again later.",
  missingRequiredFields:
    "Missing required fields. Please check your input and try again.",
  invalidRequest: "Invalid request. Please review your input.",
  forbidden: "You do not have permission to access this resource.",
  notFound: "The requested resource was not found.",
  methodNotAllowed: "The HTTP method is not allowed for this endpoint.",

  // ─── Authentication & Authorization ──────────────────────────────
  signedUp: "User signed up successfully.",
  signedIn: "User signed in successfully.",
  signedOut: "User signed out successfully.",
  invalidCredentials: "Invalid email address or password.",
  userUnauthorized: "Unauthorized access. Please sign in to continue.",
  accessTokenExpired: "Access token has expired. Please log in again.",
  refreshTokenExpired: "Refresh token has expired. Please log in again.",
  tokenInvalid: "Invalid or malformed token.",
  policyError: "You must agree to the privacy policy to proceed.",
  sessionExpired: "Session has expired. Please sign in again.",

  // ─── User ─────────────────────────────────────────────────────────
  emailExists: "A user with this email address already exists.",
  userCreated: "User account created successfully.",
  userUpdated: "User profile updated successfully.",
  userDeleted: "User account deleted successfully.",
  userNotFound: "User not found.",
  passwordChanged: "Password changed successfully.",
  passwordResetEmailSent: "Password reset email sent successfully.",
  passwordResetSuccess: "Password has been reset successfully.",
  accountInactive: "Your account is inactive. Please contact support.",

  // ─── Validation ───────────────────────────────────────────────────
  validationFailed:
    "Validation failed. Please correct the errors and try again.",
  invalidEmailFormat: "Invalid email format.",
  weakPassword: "Password is too weak. Please use a stronger password.",
  passwordMismatch: "Passwords do not match.",
  fieldTooShort: "One or more fields are too short.",
  fieldTooLong: "One or more fields are too long.",
  unsupportedFileType: "Unsupported file type.",
  fileTooLarge: "Uploaded file exceeds the allowed size.",

  // ─── Database ─────────────────────────────────────────────────────
  databaseError: "A database error occurred. Please contact support.",
  duplicateEntry: "Duplicate entry detected.",
  resourceConflict: "Conflict with existing resource.",
  transactionFailed: "Database transaction failed. Please try again.",

  // ─── Files ────────────────────────────────────────────────────────
  fileUploadSuccess: "File uploaded successfully.",
  fileUploadFailed: "File upload failed. Please try again.",
  fileNotFound: "Requested file not found.",
  fileDeleted: "File deleted successfully.",

  // ─── Payment ──────────────────────────────────────────────────────
  paymentSuccess: "Payment processed successfully.",
  paymentFailed: "Payment failed. Please try again.",
  invalidPaymentMethod: "Invalid payment method provided.",
  paymentPending: "Payment is pending confirmation.",
  insufficientFunds: "Insufficient funds for this transaction.",

  // ─── Admin & System ───────────────────────────────────────────────
  accessDenied: "You do not have administrative privileges.",
  settingsUpdated: "System settings updated successfully.",
  maintenanceMode: "System is under maintenance. Please try again later.",

  // ─── Rate Limiting & Security ─────────────────────────────────────
  tooManyRequests: "Too many requests. Please slow down.",
  suspiciousActivity: "Suspicious activity detected. Please try again later.",
  accountLocked:
    "Account has been temporarily locked due to multiple failed login attempts.",
  ipBanned: "Access denied from this IP address.",

  // ─── Miscellaneous ────────────────────────────────────────────────
  operationNotSupported: "This operation is not supported.",
  featureComingSoon: "This feature is coming soon.",
  emailSent: "Email sent successfully.",
  emailFailed: "Failed to send email. Please try again later.",
};
