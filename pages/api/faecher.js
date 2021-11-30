export default (req, res) => {
    res.status(200).json({ faecher: ["Deutsch", "Mathe", "Englisch", "Französisch", "Latein", "Spanisch", "Kunst", "Geschichte", "Musik", "PoWi", "Erdkunde", "Biologie", "Chemie", "Physik", "Informatik", "Philosophie", "Religion", "WeNo", "Lernzettel"] })
}