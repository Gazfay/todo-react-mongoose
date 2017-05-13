function successCallBack(data) {
	return {
		ok: true,
		data: data
	}
}

function failCallBack(err) {
	return {
		ok: false,
		err: err
	}
}

module.exports = {
	successCallBack: successCallBack,
	failCallBack: failCallBack
}