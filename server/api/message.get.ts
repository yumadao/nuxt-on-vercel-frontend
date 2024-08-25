export default eventHandler(async () => {
  const db = hubDatabase();

  // TODO: move it a a Server Task
  await db.exec(
    "CREATE TABLE IF NOT EXISTS message (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, text TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)"
  );

  const { results } = await db
    .prepare("SELECT * FROM message ORDER BY created_at DESC")
    .all();

  return results;
});
