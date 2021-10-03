export default (req, res) => {
    res.status(200).json({ warning: 'Aufgrund von Serverupdates kann es zu neuanmeldungen kommen.' })
}