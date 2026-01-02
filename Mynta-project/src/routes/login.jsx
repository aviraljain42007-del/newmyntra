function Login() {
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Login</h2>
        <form style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email"  placeholder='JaiShreeRam@gmail.com' className="form-control" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">Enter your registered email.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password"  placeholder='Maryada purushottam' className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-danger w-100">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;