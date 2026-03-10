export const getNumbers = (req, res) => {
    const numbers = [1, 2, 3, 4.5, 6, 7, 8, 9, 10, 220];
    res.render('home', { numbers: numbers })
};

export const getProfile = (req, res) => {
    return res.render('profile', { 'name': 'Mohammad Ali Khan' });
};