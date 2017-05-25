const dataHelper = {
  successCallBack:(data) => {
    return {
      ok: true,
      data
    }
  },
  failCallBack:(err) => {
    return {
      ok: false,
      err: err
    }
  }
}

module.exports = dataHelper;