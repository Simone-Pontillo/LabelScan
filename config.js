// Configurazione del database (Supabase).
// La chiave "publishable" e' pensata per stare nel browser: i dati sono protetti dalle regole del database.
// NON inserire mai qui la "secret key" o la "service_role".
window.SB_URL = "https://shxpexehcylshxhnlzpp.supabase.co";
window.SB_KEY = "sb_publishable_LVDzXnqMI0ir9rizgGrmbg_P-voYmFI";

// Accessi social da mostrare. Tieni SOLO quelli che hai attivato in Supabase
// (Authentication -> Sign In / Providers). Esempi: ["google","apple"], ["google"], [].
window.SB_OAUTH = ["google","apple"];
