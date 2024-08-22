export const validate = schema => async (req, res, next) => {
	try {
		const input = schema.safeParse(req.query);
		if (!input.success) return res.status(400).send(input.error.issues);
		return next();
	} catch (error) {
		return res.status(400).json(error);
	}
};
