export default (req, res) => {
  res.status(200).json({ faecher: ["deutsch", "mathe", "englisch", "französisch", "latein", "spanisch", "kunst", "geschichte", "musik", "powi", "erdkunde", "biologie", "chemie", "pysik", "informatik", "philosophie", "religion", "weno", "lernzettel"] })
}