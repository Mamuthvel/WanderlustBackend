import jwt from 'jsonwebtoken';
export const generateToken = (user) => {
    const { _id, email } = user;
    if (!_id || !email) throw new Error("email is not supported to generate token")
    return jwt.sign(
        { id: _id, email: email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    )
}